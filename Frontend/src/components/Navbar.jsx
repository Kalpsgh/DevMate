import React from 'react'
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Feed from '../pages/Feed';
import { Link } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constants";


const Navbar = () => {

  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        BASE_URL + "logout",
        {},
        {
          withCredentials: true,
        }
      );

      dispatch(removeUser());

      navigate("/");

    } catch (err) {
      console.log(err);
    }
  };





  return (
    <>
      <div className="navbar bg-base-300 shadow-md px-6">
        {/* Left Side - Logo */}
        <div className="flex-1">
          <a className="flex items-center gap-2">
            <img
              src={logo}
              alt="DevMate"
              className="w-11 h-11 object-contain cursor-pointer"
            />
            
            <Link to={user ? "/feed" : "/"}>
            <h1 className="text-3xl font-bold cursor-pointer">
              <span className="text-white">Dev</span>
              <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
                Mate
              </span>
            </h1>
            </Link>
          </a>
        </div>

        {/* Right Side */}
        {/* Right Side */}
<div className="flex-none flex items-center gap-4">

  {user && (
    <h2 className="hidden md:block text-lg font-mono">
      Welcome,&nbsp;
      <span className="text-lg font-mono">
        {user.firstName}
      </span>
    </h2>
  )}

  <div className="dropdown dropdown-end">
    <div
      tabIndex={0}
      role="button"
      className="btn btn-ghost btn-circle avatar"
    >
      {user && (
        <div className="w-15 h-10.5 rounded-full overflow-hidden border-2 border-primary shadow-md">

          <img
            src={user.photoUrl}
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover object-center"
          />

        </div>
      )}
    </div>

            {user ? (
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-5  z-[1] w-40 rounded-box bg-base-300 p-2 shadow-lg"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>

                <li>
                  <Link to="/feed" className="justify-between">
                    Feed
                  </Link>
                </li>

                <li>
                  <Link to="/connection" className="justify-between">
                    Connection
                  </Link>
                </li>

                <li>
                  <Link to="/request" className="justify-between">
                    Request
                  </Link>
                </li>

                <li>
                  <button onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
