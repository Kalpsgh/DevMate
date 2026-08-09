import express from "express";
import connectDb from "./config/database.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRouter.js";
import profileRouter from "./routes/profileRouter.js";
import request from "./routes/request.js";
import user from "./routes/user.js";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import chatRouter from "./routes/chat.js";
import Chat from "./models/chat.js";

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", request);
app.use("/", user);
app.use("/", chatRouter);


// Create HTTP server
const server = http.createServer(app);


// Create Socket.IO server
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        credentials: true,
    },
});

const onlineUsers = new Map();


// Socket.IO connection
io.on("connection", (socket) => {

  console.log("User connected:", socket.id);


  // User joins chat
  socket.on("joinChat", ({ userId, targetUserId }) => {

    const roomId = [userId, targetUserId]
      .sort()
      .join("_");


    // Store user ID on socket
    socket.userId = userId.toString();


    // Add socket to online users
    if (!onlineUsers.has(socket.userId)) {

      onlineUsers.set(socket.userId, new Set());

    }

    onlineUsers
      .get(socket.userId)
      .add(socket.id);


    // Join chat room
    socket.join(roomId);


    console.log(
      `${socket.userId} joined room ${roomId}`
    );


    // Check if target user is already online
    const targetIsOnline =
      onlineUsers.has(targetUserId.toString());


    if (targetIsOnline) {

      // Tell current user that target is online
      socket.emit("userOnline", {
        userId: targetUserId.toString(),
      });

    }


    // Tell other user that current user came online
    socket.to(roomId).emit("userOnline", {
      userId: userId.toString(),
    });

  });


  // Send message
  socket.on(
    "sendMessages",
    async ({ userId, targetUserId, text }) => {

      try {

        const roomId = [userId, targetUserId]
          .sort()
          .join("_");


        let chat = await Chat.findOne({
          participants: {
            $all: [userId, targetUserId],
          },
        });


        if (!chat) {

          chat = new Chat({
            participants: [
              userId,
              targetUserId,
            ],
            messages: [],
          });

        }


        chat.messages.push({
          senderId: userId,
          text: text,
        });


        await chat.save();


        const savedMessage =
          chat.messages[chat.messages.length - 1];


        io.to(roomId).emit("messageReceived", {

          userId,

          text,

          createdAt: savedMessage.createdAt,

        });


      } catch (err) {

        console.log("Message save error:", err);

      }

    }
  );


  // Disconnect
  socket.on("disconnect", () => {

    console.log(
      "User disconnected:",
      socket.id
    );


    const userId = socket.userId;


    if (!userId) {
      return;
    }


    // Remove this socket
    const userSockets = onlineUsers.get(userId);

    if (userSockets) {

      userSockets.delete(socket.id);


      // User is completely offline
      if (userSockets.size === 0) {

        onlineUsers.delete(userId);


        // Tell all rooms this socket was in
        for (const roomId of socket.rooms) {

          if (roomId === socket.id) {
            continue;
          }


          socket.to(roomId).emit("userOffline", {
            userId: userId,
          });

        }

      }

    }

  });

});


connectDb()
    .then(() => {

        console.log("MongoDB Connected");

        server.listen(5000, () => {
            console.log("Server is running on port 5000...");
        });

    })
    .catch((err) => {

        console.log("MongoDB Can't Connect", err);

    });