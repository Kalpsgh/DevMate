import { useEffect } from "react";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate, Outlet } from "react-router-dom";
import { BASE_URL } from '../utils/constants';
import Feed from "./Feed";

const Home = () => {





  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Home;