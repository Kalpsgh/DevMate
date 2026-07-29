import express from "express"
import {adminAuth,userAuth} from "./middlewares/auth.js"
import connectDb from "./config/database.js"
import UserModel from "./models/user.js"
const app=express();

app.post("/signup",async(req,res)=>{
    const user=new UserModel({
        firstName:"Virat",
        lastName:"Kohli",
        emailId:"virat@gmail.com",
        password:"12345 ",
    });

    try{
        await user.save();
        res.send("Data Send Successfully")
        
    }
    catch(err){
        res.send("My Custom error")
        console.log("my custom error")
    }

})
connectDb()
    .then(()=>{
        console.log("MongoDB Connected");
        app.listen(5000,()=>{
        console.log("Server is running on port 5000...");
})
    })
    .catch((err)=>{
        console.log("MondoDB Can't Connect",err)
    })


