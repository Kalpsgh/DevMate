import express from "express";
import { getChat } from "../controllers/chatController.js";
import { userAuth } from "../middlewares/auth.js";

const chatRouter = express.Router();

chatRouter.get(
  "/chat/:targetUserId",
  userAuth,
  getChat
);

export default chatRouter;