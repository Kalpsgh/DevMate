import express from "express"
import {adminAuth,userAuth} from "./middlewares/auth.js"


const app=express();


app.use("/admin",adminAuth,(req,res)=>{
    res.send("Welcome Admin");
    console.log("Welcome Admin");
})

app.get("/admin/getAllData",(req,res)=>{
    res.send("All data sent")
    console.log("All data sent");
})

app.get("/admin/deleteUser",(req,res)=>{
    res.send("User Deleted");
    console.log("User Deleted");
})

app.use("/user",userAuth,(req,res)=>{
    res.send("Welcome User");
    console.log("Welcome User")
})

app.get("/user/login",(req,res)=>{
    res.send("User LogIn")
    console.log("User LogIn");
})

app.get("/user/signup",(req,res)=>{
    res.send("User SignUp");
    console.log("User SignUp");
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000...");
})