import { useEffect, useRef, useState } from "react";
import { FaPaperPlane, FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { createSocketConnection } from "../utils/socket";


const Chat = () => {

    const location = useLocation();

    const targetUser = location.state?.user;

    const navigate = useNavigate();

    const { targetUserId } = useParams();

    const user = useSelector((store) => store.user);

    const socketRef = useRef(null);

    const messagesEndRef = useRef(null);

    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([]);

    const [isOnline, setIsOnline] = useState(false);


    // Get previous messages from MongoDB
    useEffect(() => {

        const getMessages = async () => {

            try {

                const res = await axios.get(
                    BASE_URL + "chat/" + targetUserId,
                    {
                        withCredentials: true,
                    }
                );

                setMessages(
                    res.data.map((msg) => ({
                        id: msg._id,
                        text: msg.text,
                        senderId: msg.senderId.toString(),
                        createdAt: msg.createdAt,
                    }))
                );

            } catch (err) {

                console.log(err);

            }

        };


        if (targetUserId && user?._id) {
            getMessages();
        }

    }, [targetUserId, user?._id]);


    // Socket connection
    // Socket connection
useEffect(() => {

  if (!user?._id || !targetUserId) {
    return;
  }


  const socket = createSocketConnection();

  socketRef.current = socket;


  // Join chat room
  socket.emit("joinChat", {
    userId: user._id,
    targetUserId: targetUserId,
  });


  // Target user is online
  socket.on("userOnline", ({ userId }) => {

    if (userId === targetUserId) {

      setIsOnline(true);

    }

  });


  // Target user is offline
  socket.on("userOffline", ({ userId }) => {

    if (userId === targetUserId) {

      setIsOnline(false);

    }

  });


  // Receive message
  socket.on("messageReceived", (message) => {

    setMessages((prev) => [

      ...prev,

      {
        id: Date.now(),
        text: message.text,
        senderId: message.userId.toString(),
        createdAt: message.createdAt,
      },

    ]);

  });


  // Cleanup
  return () => {

    socket.disconnect();

  };

}, [user?._id, targetUserId]);

    useEffect(() => {

        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });

    }, [messages]);


    // Send message
    const sendMessage = () => {

        if (!message.trim()) {
            return;
        }


        socketRef.current.emit("sendMessages", {

            userId: user._id,

            targetUserId: targetUserId,

            text: message,

        });


        setMessage("");

    };


    return (

        <div className="h-[calc(100vh-120px)] flex justify-center px-4 py-4 overflow-hidden">

            <div className="w-full max-w-5xl h-full bg-base-200 rounded-xl shadow-2xl overflow-hidden flex flex-col">


                {/* Header */}

                <div className="flex items-center gap-5 px-6 py-4 border-b border-base-300">

                    <button
                        className="btn btn-ghost btn-circle"
                        onClick={() => navigate("/connection")}
                    >
                        <FaArrowLeft />
                    </button>

                    {targetUser && (
                        <>
                            {/* Profile Image */}
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">

                                <img
                                    src={targetUser.photoUrl}
                                    alt="Profile"
                                    className="w-full h-full object-cover object-[60%_5%]"
                                />

                            </div>

                            {/* User Details */}
                            <div>

                                <h2 className="text-xl font-bold text-primary">
                                    {targetUser.firstName} {targetUser.lastName}
                                </h2>

                                <p
                                    className={`text-sm ${isOnline
                                            ? "text-success"
                                            : "text-base-content/50"
                                        }`}
                                >
                                    {isOnline ? "Online" : "Offline"}
                                </p>

                            </div>
                        </>
                    )}

                </div>


                {/* Messages */}

                <div className="flex-1 min-h-0 overflow-y-auto px-6 py-5">

                    {messages.map((msg) => (

                        <div
                            key={msg.id}
                            className={`chat ${msg.senderId === user._id.toString()
                                ? "chat-end"
                                : "chat-start"
                                } mb-3`}
                        >

                            <div
                                className={`chat-bubble ${msg.senderId === user._id.toString()
                                    ? "chat-bubble-primary"
                                    : ""
                                    }`}
                            >
                                <div>{msg.text}</div>

                                <div className="text-[10px] opacity-60 text-right mt-1">
                                    {new Date(msg.createdAt).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </div>
                            </div>

                        </div>

                    ))}

                    {/* Scroll target */}
                    <div ref={messagesEndRef} />

                </div>


                {/* Message Input */}

                <div className="px-5 py-4 border-t border-base-300">

                    <div className="flex gap-3">

                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => {

                                if (e.key === "Enter") {
                                    sendMessage();
                                }

                            }}
                            className="input input-bordered flex-1"
                        />


                        <button
                            className="btn btn-primary px-5"
                            onClick={sendMessage}
                        >
                            <FaPaperPlane />
                        </button>

                    </div>

                </div>


            </div>

        </div>

    );
};


export default Chat;