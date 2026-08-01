import express from "express";
import { userAuth } from "../middlewares/auth.js";
import { userConnection, userRequest ,userFeed} from "../controllers/userController.js";

const userRouter=express.Router();

userRouter.get("/user/requests/received",userAuth,userRequest);

userRouter.get("/user/connection",userAuth,userConnection)

userRouter.get("/user/feed",userAuth,userFeed)

export default userRouter;