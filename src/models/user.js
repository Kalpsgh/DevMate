import mongoose, { model, Schema } from "mongoose";

const userSchema=Schema({
    firstName:{
        type:String,
        required:true   
    },
    lastName:String,
    emailId:{
        type: String,
        required: [true, "Email is required"]
    },
    password:String
})

const UserModel=model("User",userSchema);

export default UserModel;