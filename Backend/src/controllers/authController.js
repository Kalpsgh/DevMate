import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import {
  validateSignUpData,
  validateLogInData,
} from "../utils/validation.js";


export const signup = async (req, res) => {
  try {
    // Validate
    validateSignUpData(req);

    const { firstName, lastName, emailId, password,age, gender, photoUrl,about, skills, } = req.body;

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      ...req.body,
      password: hashPassword,
    });
    await user.save();

    res.send("Data Send Successfully");

  } catch (err) {
    res.send(err.message);
  }
};

export const login = async (req, res) => {
  try {

    validateLogInData(req);

    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId });

    if (!user) {
       return res.status(400).send("Invalid Credentials");
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
       return res.status(400).send("Invalid Credentials");;
    }

    const token = jwt.sign(
      { _id: user._id },
      "MySecretKey"
    );

    res.cookie("token", token);

    res.send(user);

  } catch (err) {
    res.send(err.message);
  }
};

export const logout = (req, res) => {
  try {

    const { token } = req.cookies;
    res.clearCookie("token");

    res.send("Logout Successful")

  }
  catch (err) {
    res.send(err.message);
  }
}