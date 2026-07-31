import express from "express"
import { userAuth } from "../middlewares/auth.js";
import { requestController } from "../controllers/requestController.js";



const connectionReq=express.Router();

connectionReq.post("/request/send/:status/:touserId",userAuth,requestController);

export default connectionReq;