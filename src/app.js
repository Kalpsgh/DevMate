import express from "express"

const app=express();

app.get("/user",(req,res)=>{
    console.log(req.query);
})

app.get("/about",(req,res)=>{
    res.send("About");
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000...");
})