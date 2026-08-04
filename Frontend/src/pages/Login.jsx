import React, { useState } from 'react'
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setError("");
      const res = await axios.post(
        BASE_URL + "login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data));
      navigate("/feed");


    } catch (error) {

       console.log(error);
  console.log(error.response);
  console.log(error.response?.data);

      setError(error.response?.data || "Something went wrong");

    }
  }



  //dispatch(addUser(res.data))

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-base-100">
        <fieldset className="fieldset w-full max-w-md rounded-2xl bg-base-300 p-8 shadow-xl border border-base-300">

          <h2 className="text-3xl font-bold text-center mb-2">
            Welcome👋
          </h2>

          <p className="text-center text-base-content/70 mb-6">
            Login to your DevMate account
          </p>

          <label className="label">
            <span className="label-text font-medium">Email</span>
          </label>

          <input
            type="email"
            value={emailId}
            placeholder="Enter your email"
            className="input input-bordered w-full"
            onChange={(e) => {
              setEmailId(e.target.value)

            }}

          />


          <label className="label mt-4">
            <span className="label-text font-medium">Password</span>
          </label>

          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            className="input input-bordered w-full"
            onChange={(e) => { setPassword(e.target.value) }}
          />

          {error && (
            <p className="text-error text-sm mt-2">
              {error}
            </p>
          )}

          <button className="btn btn-primary w-full mt-6" onClick={handleLogin}>
            Login
          </button>

          <p className="text-center mt-5 text-sm">
            Don't have an account?{" "}
            <span className="text-primary font-semibold cursor-pointer hover:underline" onClick={() => { navigate("/signup") }}>
              Sign Up
            </span>
          </p>

        </fieldset>
      </div>
    </>
  )
}

export default Login
