import mongoose from "mongoose";
import dns from "dns";

//Change DNS
dns.setServers(["1.1.1.1","8.8.8.8"]);

const connectDb = async () => {
    await mongoose.connect("mongodb+srv://kalpeshpatil65555_db_user:1tpD440OXyHG97V3@cluster0.lwpusi7.mongodb.net/DevMate");
}

export default connectDb;    