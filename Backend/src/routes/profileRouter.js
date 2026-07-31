import express from "express";
import { userAuth } from "../middlewares/auth.js";
import { getProfile } from "../controllers/profileController.js";

const router=express.Router();

//get profile
router.get("/profile",userAuth,getProfile)

export default  router;