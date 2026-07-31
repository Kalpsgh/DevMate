import express from "express";
import { userAuth } from "../middlewares/auth.js";
import { editProfile, getProfile,passwordupdate } from "../controllers/profileController.js";


const router=express.Router();

//get profile
router.get("/profile/view",userAuth,getProfile)

//edit profile 
router.patch("/profile/edit",userAuth,editProfile)

//password update
router.patch("/profile/password",userAuth,passwordupdate)

export default  router;