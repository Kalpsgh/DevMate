import express from "express"
import { userAuth } from "./middlewares/auth.js"
import connectDb from "./config/database.js"
import User from "./models/user.js"
import {validateSignUpData,validateLogInData} from "./utils/validation.js"
import bcrypt, { hash } from "bcrypt"
import cookieParser from "cookie-parser"
import jwt from "jsonwebtoken"
import authRouter from "./routes/authRouter.js";
import profileRouter from "./routes/profileRouter.js"


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);

app.use("/", profileRouter);

app.post("/sendConnectionReq",userAuth,async(req,res)=>{

    const user=req.user;

    res.send(user.firstName+" send the connection request.");
})


connectDb()
    .then(() => {
        console.log("MongoDB Connected");
        app.listen(5000, () => {
            console.log("Server is running on port 5000...");
        })
    })
    .catch((err) => {
        console.log("MondoDB Can't Connect", err)
    })


