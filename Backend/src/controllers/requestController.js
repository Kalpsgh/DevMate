import ConnectionRequest from "../models/connectionRequest.js";
import mongoose from "mongoose";
import User from "../models/user.js";

export const requestController = async (req, res) => {

    try {

        ///request/send/:status/:touserId
        const fromUserId = req.user._id;
        const toUserId = req.params.touserId;
        const status = req.params.status;

        // Validate status
        const allowedStatus = ["interested", "ignored"];

        if (!allowedStatus.includes(status)) {
            return res.status(400).send("Invalid Status");
        }

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(toUserId)) {
            return res.status(400).send("Invalid User ID");
        }

        // Check user exists
        const toUser = await User.findById(toUserId);

        if (!toUser) {
            return res.status(404).send("User Not Found");
        }

        // Prevent sending request to yourself
        if (fromUserId.toString() === toUserId) {
            return res.status(400).send("You cannot send a request to yourself");
        }

        // Check duplicate request
        const existingRequest = await ConnectionRequest.findOne({
            $or: [
                {
                    fromUserId,
                    toUserId,
                },
                {
                    fromUserId: toUserId,
                    toUserId: fromUserId,
                },
            ],
        });


        if (existingRequest) {
            return res.status(400).send("Connection Request Already Exists");
        }

        const connectionRequest = new ConnectionRequest({
            fromUserId,
            toUserId,
            status,
        })


        await connectionRequest.save();

        res.json(connectionRequest)

        res.status(200).send("Connection Request Sent Successfully");


    } catch (err) {

        res.status(500).send(err.message);


    }



}

//request/review/:status/:requestId
export const requestReview = async (req, res) => {

    try {

        const { status, requestId } = req.params;

        // Validate status
        const allowedStatus = ["accepted", "rejected"];

        if (!allowedStatus.includes(status)) {
            return res.status(400).send("Invalid Status");
        }

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(requestId)) {
            return res.status(400).send("Invalid User ID");
        }

        // Check user exists
        const connectionRequest = await ConnectionRequest.findOne({
           _id: requestId,
           toUserId: req.user._id,
           status: "interested"

        });

        if (!connectionRequest) {
           return res.status(404).send("Connection Request Not Found");
        }

        connectionRequest.status=status;

        await connectionRequest.save();

        res.send("Request Accepted")



    } catch (err) {
        res.status(500).send(err.message);
    }
}