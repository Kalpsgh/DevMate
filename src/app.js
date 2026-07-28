import express from "express"
import adminAuth from "./middlewares/auth.js"

const app=express();


app.use("/admin",adminAuth)

app.get("/admin/getAllData",(req,res)=>{
    res.send("All data sent")
    console.log("All data sent");
})

app.get("/admin/deleteUser",(req,res)=>{
    res.send("User Deleted");
    console.log("User Deleted");
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000...");
})