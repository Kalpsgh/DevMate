import React from 'react'
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const user = useSelector((store) => store.user);
  const navigate=useNavigate();
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

            <h1 className="text-3xl font-bold cursor-pointer" onClick={() => navigate("/")}>
              <span className="text-white">Dev</span>
              <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
                Mate
              </span>
            </h1>
          </a>
        </div>

        {/* Right Side */}
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
               { user &&
              <div className="w-15 h-10.5 rounded-full overflow-hidden border-2 border-primary shadow-md">
                
                <img
                  src={user?.photoUrl}
                  alt="Profile"
                  className="w-14 h-14 rounded-full object-center object-cover"
                />

              </div>
              
               }
            </div>

            {user ?    (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] w-56 rounded-box bg-base-100 p-2 shadow-lg"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge badge-primary">New</span>
                </a>
              </li>

              <li>
                <a>Edit Profile</a>
              </li>

              <li>
                <a>Settings</a>
              </li>

              <li>
                <a>Logout</a>
              </li>
            </ul>
            ): (
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
