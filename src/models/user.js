import mongoose, { model, Schema } from "mongoose";

const userSchema=Schema({
    firstName:String,
    lastName:String,
    emailId:String,
    password:String
})

const UserModel=model("User",userSchema);

export default UserModel;