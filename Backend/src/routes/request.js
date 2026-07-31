import express from "express"
import { userAuth } from "../middlewares/auth.js";
import { requestController } from "../controllers/requestController.js";


const connectionReq=express.Router();

connectionReq.post("/sendConnectionReq",userAuth,requestController);

export default connectionReq;