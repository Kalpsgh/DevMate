import express from "express"
import { userAuth } from "./middlewares/auth.js"
import connectDb from "./config/database.js"
import User from "./models/user.js"
import {validateSignUpData,validateLogInData} from "./utils/validation.js"
import bcrypt, { hash } from "bcrypt"
import cookieParser from "cookie-parser"
import jwt from "jsonwebtoken"

const app = express();

app.use(express.json());
app.use(cookieParser());

app.post("/signup", async (req, res) => {

    try {

        //validate
        validateSignUpData(req);

        //password hashing

        const{ firstName,lastName,emailId,password}=req.body;
        const hashPassword=await bcrypt.hash(password,10);

        const user=new User({
            firstName,
            lastName,
            emailId,
            password:hashPassword
        })



      
        await user.save();
        res.send("Data Send Successfully")
        console.log("Data Send Successfully")
    }
    catch (err) {
            res.send(err.message)
        
    }

})

app.post("/login",async(req,res)=>{ 

    try{
        //validate
       validateLogInData(req) ;

        //
        const {emailId,password}=req.body;

        //find user 
        const user=await User.findOne({emailId:emailId})

        if(!user){
            throw new Error("Invalid Credentials")
        }

        // Compare password
        const isPasswordValid=await bcrypt.compare(
            password,
            user.password
        )
        if (!isPasswordValid) {
            throw new Error("Invalid Credentialss");
        }

        const token=await jwt.sign({_id:user._id},"MySecretKey");


        res.cookie("token",token);

        res.send("Login Successful");

    }
    catch (err) {
        res.send(err.message) 
    }
})

app.get("/profile",userAuth,async (req,res)=>{

    const user=req.user;
    res.send(user);
})

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


