import express from "express"
import { adminAuth, userAuth } from "./middlewares/auth.js"
import connectDb from "./config/database.js"
import UserModel from "./models/user.js"
const app = express();
//app.use(express.json())

app.post("/signup", adminAuth, async (req, res) => {

    const user = new UserModel({

        "firstName": "gulab",
        "lastName": "Patil",
        "emailId": "rajat@gmail.com",
        "password": "1234"

    });

    await user.save();
    res.send("Data Send Successfully")
    console.log("Data Send Successfully")

})

app.get("/delete", async (req, res) => {
    try {
        const user = await UserModel.countDocuments()
        res.send(user);
    } catch (err) {
        res.status(500).send("Something went wrong");
    }
});






connectDb()
    .then(() => {
        console.log("MongoDB Connected");
        app.listen(5000, () => {
            console.log("Server is running on port 5000...");
        })
    })
    .catch((err) => {
        console.log("MondoDB Can't Connect", err)
    })


