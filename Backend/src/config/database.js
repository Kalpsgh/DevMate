import mongoose from "mongoose";
import dns from "dns";

//Change DNS
dns.setServers(["1.1.1.1","8.8.8.8"]);

const connectDb = async () => {
     await mongoose.connect(process.env.MONGODB_URI);
}

export default connectDb;    