import mongoose, { model, Schema } from "mongoose";

const userSchema=Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    emailId:{
        type:String,
    },
    password:{
        type:String,
    },
})

const UserModel=model("User",userSchema);

export default UserModel;