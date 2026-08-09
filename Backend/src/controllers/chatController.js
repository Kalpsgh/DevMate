import Chat from "../models/chat.js";

export const getChat = async (req, res) => {
  try {

    const userId = req.user._id;
    const targetUserId = req.params.targetUserId;

    const chat = await Chat.findOne({
      participants: {
        $all: [userId, targetUserId],
      },
    });

    if (!chat) {
      return res.json([]);
    }

    res.json(chat.messages);

  } catch (err) {

    res.status(500).send(err.message);

  }
};