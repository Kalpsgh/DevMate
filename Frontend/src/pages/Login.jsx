import React, { useState } from 'react'
import axios from "axios";

const Login = () => {

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await axios.post(
        "http://localhost:5000/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );

    } catch (error) {
      console.log(error.message)

    }
  }

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

          <button className="btn btn-primary w-full mt-6" onClick={handleLogin}>
            Login
          </button>

          <p className="text-center mt-5 text-sm">
            Don't have an account?{" "}
            <span className="text-primary font-semibold cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>

        </fieldset>
      </div>
    </>
  )
}

export default Login
