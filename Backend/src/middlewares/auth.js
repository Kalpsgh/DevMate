import jwt from "jsonwebtoken"
import UserModel from "../models/user.js"

const userAuth = async (req, res, next) => {

    try {
        

        const { token } = req.cookies;

        if (!token) {
            return res.status(401).send("Invalid Credentials");
        }

        const decoded = jwt.verify(token, "MySecretKey");

        const user = await UserModel.findById(decoded._id);

        if (!user) {
            return res.status(401).send("Invalid Credentials");
        }

        req.user = user;   
       

        next();

    } catch (err) {

        res.status(401).send(err.message);

    }

}

export {userAuth};