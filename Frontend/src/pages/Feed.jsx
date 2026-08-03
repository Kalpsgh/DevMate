import React from 'react'
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from '../utils/constants.jsx';
import { useDispatch } from "react-redux";
import { addFeed } from "./feedSlice.jsx";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { addUser } from "../utils/userSlice";


const Feed = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const feed = useSelector((store) => store.feed);

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "profile/view", {
        withCredentials: true,
      });

      dispatch(addUser(res.data));
      return true;

    } catch (err) {
      navigate("/login");
      return false;
    }
  };

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "user/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(res.data));

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {

    const loadData = async () => {

      if (!user) {

        const loggedIn = await fetchUser();

        if (!loggedIn) return;

      }

      await getFeed();

    };

    loadData();

  }, []);



  console.log(feed);


  return (
    <div className='h-screen'>


      Feed


    </div>
  )
}

export default Feed
