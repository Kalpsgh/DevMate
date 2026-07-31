import express from "express";
import { userAuth } from "../middlewares/auth.js";
import { editProfile, getProfile } from "../controllers/profileController.js";

const router=express.Router();

//get profile
router.get("/profile/view",userAuth,getProfile)

//edit profile 
router.patch("/profile/edit",userAuth,editProfile)

export default  router;