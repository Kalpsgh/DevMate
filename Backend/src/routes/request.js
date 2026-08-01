import express from "express"
import { userAuth } from "../middlewares/auth.js";
import { requestController, requestReview } from "../controllers/requestController.js";



const connectionReq=express.Router();

//connectionRequest
connectionReq.post("/request/send/:status/:touserId",userAuth,requestController);

//reviewRequest
connectionReq.post("/request/review/:status/:requestId",userAuth,requestReview);

export default connectionReq;