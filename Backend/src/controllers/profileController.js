import { validateEditProfileData } from "../utils/validation.js"
import bcrypt from "bcrypt";

export const getProfile = async (req, res) => {
    try {
        const user = req.user;

        res.status(200).json(user);

    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const editProfile = async (req, res) => {
  try {
    

    validateEditProfileData(req);
    

    const loggedInUser = req.user;

    Object.keys(req.body).forEach((key) => {
      loggedInUser[key] = req.body[key];
    });
   
    await loggedInUser.save();
  

    res.status(200).json(loggedInUser);

  } catch (err) {
    console.log("ERROR:", err);
      res.status(400).send(err.message);
  }
};

export const passwordupdate = async (req, res) => {

    try{
    const { oldPassword, newPassword } = req.body;

    const isOldPasswordValid = await bcrypt.compare(
        oldPassword,
        req.user.password
    );

    if (!isOldPasswordValid) {
        return res.send("Invalid Credentials")
    }

    const hashNewPassword = await bcrypt.hash(newPassword, 10);

    req.user.password = hashNewPassword;

    await req.user.save();
    res.send("Password Updated Successfully")
}

    catch (err) {
        res.status(500).send(err.message);
    }

}