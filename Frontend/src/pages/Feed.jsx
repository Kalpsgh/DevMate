import React from 'react'
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from '../utils/constants.jsx';
import { useDispatch } from "react-redux";
import { addFeed } from "./feedSlice.jsx";
import { useSelector } from "react-redux";

const Feed = () => {

    const dispatch = useDispatch();
    const getFeed = async () => {
    const res = await axios.get(
        BASE_URL + "user/feed",
        {
            withCredentials:true
        }
    );

    dispatch(addFeed(res.data));
}

useEffect(() => {
  getFeed();
}, []);

  const feed = useSelector((store) => store.feed);

  console.log(feed);


  return (
    <div className='h-screen'>

      


      
    </div>
  )
}

export default Feed
