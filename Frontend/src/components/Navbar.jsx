import React from 'react'
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
     <div className="navbar bg-base-200 shadow-md px-6">
          {/* Left Side - Logo */}
          <div className="flex-1">
            <a className="flex items-center gap-2 cursor-pointer">
              <img
                src={logo}
                alt="DevMate"
                className="w-11 h-11 object-contain"
              />
    
              <h1 className="text-2xl font-bold">
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
                <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="User"
                  />
                </div>
              </div>
    
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
            </div>
          </div>
     </div>
     </>
  )
}

export default Navbar
