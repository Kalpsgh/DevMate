import express from "express"
import connectDb from "./config/database.js"
import cookieParser from "cookie-parser"
import authRouter from "./routes/authRouter.js";
import profileRouter from "./routes/profileRouter.js"
import request from "./routes/request.js"

const app = express();
app.use(express.json());
app.use(cookieParser());


app.use("/", authRouter);

app.use("/", profileRouter);

app.use("/",request)



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


