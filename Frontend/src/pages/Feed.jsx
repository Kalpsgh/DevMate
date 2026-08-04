import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import UserCard from "./UserCard";
import { addFeed, removeFeed } from "../utils/feedSlice";

const Feed = () => {

  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

const feedUser = feed?.[0];

const sendRequest = async (status, userId) => {
  try {
    await axios.post(
      BASE_URL + "request/send/" + status + "/" + userId,
      {},
      {
        withCredentials: true,
      }
    );

    dispatch(removeFeed(userId));

  } catch (err) {
    console.log(err);
  }
};

const getFeed = async () => {
  try {

    const res = await axios.get(
      BASE_URL + "user/feed",
      {
        withCredentials: true,
      }
    );

    dispatch(addFeed(res.data));

  } catch (err) {
    console.log(err);
  }
};

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed || feed.length === 0) {
    return (
      <h1 className="text-center text-3xl mt-20">
        No More Developers 🚀
      </h1>
    );
  }

  return (
   
  <div className="flex justify-center items-center mt-6">
    <UserCard
      user={feedUser}
      sendRequest={sendRequest}
    />
  </div>

);
};

export default Feed;  
