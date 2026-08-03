import React ,{ useState } from 'react'
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Signup = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [about, setAbout] = useState("");
    const [skills, setSkills] = useState("");

    const navigate=useNavigate();

    const handleSignup = async () => {
        try {
            const res = await axios.post(
                BASE_URL + "signup",
                {
                    firstName,
                    lastName,
                    emailId,
                    password,
                    age,
                    gender,
                    photoUrl,
                    about,
                    skills: skills
                        .split(",")
                        .map((skill) => skill.trim())
                        .filter(Boolean),
                },
                {
                    withCredentials: true,
                }
            );

            navigate("/login");

        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-base-100 py-10">
                <fieldset className="fieldset w-full max-w-md rounded-2xl bg-base-300 p-8 shadow-xl border border-base-300">

                    <h2 className="text-3xl font-bold text-center mb-2">
                        Create Account 🚀
                    </h2>

                    <p className="text-center text-base-content/70 mb-6">
                        Join DevMate and connect with developers.
                    </p>

                    {/* First Name */}
                    <label className="label">
                        <span className="label-text font-medium">First Name</span>
                    </label>

                    <input
                        type="text"
                        value={firstName}
                        placeholder="Enter your first name"
                        className="input input-bordered w-full"
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    {/* Last Name */}
                    <label className="label mt-4">
                        <span className="label-text font-medium">Last Name</span>
                    </label>

                    <input
                        type="text"
                        value={lastName}
                        placeholder="Enter your last name"
                        className="input input-bordered w-full"
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    {/* Email */}
                    <label className="label mt-4">
                        <span className="label-text font-medium">Email</span>
                    </label>

                    <input
                        type="email"
                        value={emailId}
                        placeholder="Enter your email"
                        className="input input-bordered w-full"
                        onChange={(e) => setEmailId(e.target.value)}
                    />

                    {/* Password */}
                    <label className="label mt-4">
                        <span className="label-text font-medium">Password</span>
                    </label>

                    <input
                        type="password"
                        value={password}
                        placeholder="Create a password"
                        className="input input-bordered w-full"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* Age */}
                    <label className="label mt-4">
                        <span className="label-text font-medium">Age</span>
                    </label>

                    <input
                        type="number"
                        value={age}
                        placeholder="Enter your age"
                        className="input input-bordered w-full"
                        onChange={(e) => setAge(e.target.value)}
                    />

                    {/* Gender */}
                    <label className="label mt-4">
                        <span className="label-text font-medium">Gender</span>
                    </label>

                    <select
                        className="select select-bordered w-full"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="">Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>

                    {/* Photo URL */}
                    <label className="label mt-4">
                        <span className="label-text font-medium">Photo URL</span>
                    </label>

                    <input
                        type="text"
                        value={photoUrl}
                        placeholder="Paste your profile image URL"
                        className="input input-bordered w-full"
                        onChange={(e) => setPhotoUrl(e.target.value)}
                    />

                    {/* About */}
                    <label className="label mt-4">
                        <span className="label-text font-medium">About</span>
                    </label>

                    <textarea
                        value={about}
                        placeholder="Tell us something about yourself..."
                        className="textarea textarea-bordered w-full"
                        rows="3"
                        onChange={(e) => setAbout(e.target.value)}
                    />

                    {/* Skills */}
                    <label className="label mt-4">
                        <span className="label-text font-medium">Skills</span>
                    </label>

                    <input
                        type="text"
                        value={skills}
                        placeholder="React, Node.js, MongoDB"
                        className="input input-bordered w-full"
                        onChange={(e) => setSkills(e.target.value)}
                    />

                    <button
                        className="btn btn-primary w-full mt-6"
                        onClick={handleSignup}
                    >
                        Create Account
                    </button>

                    <p className="text-center mt-5 text-sm">
                        Already have an account?{" "}
                        <span
                            className="text-primary font-semibold cursor-pointer hover:underline"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </span>
                    </p>

                </fieldset>
            </div>
        </>
    )
}

export default Signup
