import ConnectionRequestModel from "../models/connectionRequest.js";
import User from "../models/user.js";


export const userRequest = async (req, res) => {
    try {
        const connectionRequests = await ConnectionRequestModel.find({
            toUserId: req.user._id,
            status: "interested",
        }).populate(
            "fromUserId",
            "firstName lastName photoUrl age gender about skills"
        );


        res.send(connectionRequests);

    } catch (err) {
        res.status(500).send(err.message);
    }
}


export const userConnection = async (req, res) => {

    try {

        const loggedin = req.user;

        const connection = await ConnectionRequestModel.find({

            $or: [
                { toUserId: loggedin._id, status: "accepted" },
                { fromUserId: loggedin._id, status: "accepted" },
            ]

        }).populate(
            "fromUserId",
            "firstName lastName photoUrl age gender about skills"
        )
            .populate(
                "toUserId",
                "firstName lastName photoUrl age gender about skills"
            )

        const data = connection.map((row) => {
            if (row.fromUserId._id.toString() === req.user._id.toString()) {
                return row.toUserId;
            }
            return row.fromUserId;
        });

        res.send(data);



    } catch (err) {
        res.status(500).send(err.message)
    }
}

export const userFeed = async (req, res) => {
  try {

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Find all connection requests of logged-in user
    const connectionReq = await ConnectionRequestModel.find({
      $or: [
        { fromUserId: req.user._id },
        { toUserId: req.user._id },
      ],
    });

    // Store users that should not appear in feed
    const hideUsersFromFeed = new Set();

    connectionReq.forEach((request) => {
      hideUsersFromFeed.add(request.fromUserId.toString());
      hideUsersFromFeed.add(request.toUserId.toString());
    });

    // Find remaining users
    const users = await User.find({
      _id: {
        $nin: [...hideUsersFromFeed],
        $ne: req.user._id,
      },
    })
      .select("firstName lastName photoUrl age gender about skills")
      .skip(skip)
      .limit(limit);

    res.send(users);
    

  } catch (err) {
    res.status(500).send(err.message);
  }
};