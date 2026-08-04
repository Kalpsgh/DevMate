import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const EditProfile = () => {

  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState("");

  useEffect(() => {
    if (!user) return;

    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmailId(user.emailId);
    setAge(user.age);
    setGender(user.gender);
    setPhotoUrl(user.photoUrl);
    setAbout(user.about);
    setSkills(user.skills.join(", "));
  }, [user]);

  const handleEditProfile = async () => {

        console.log("Edit Profile API Hit");

    try {

      const res = await axios.patch(
        BASE_URL + "profile/edit",
        {
          firstName,
          lastName,
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

      dispatch(addUser(res.data));

      navigate("/profile");

    } catch (err) {
      console.log(err);
       console.log(err);
    console.log(err.message);
    
    }
  };

  return (
    <div className="min-h-screen bg-base-100 py-10 px-4">

      <div className="max-w-3xl mx-auto">

        <div className="card bg-base-200 shadow-2xl border border-base-300">

          <div className="card-body">

            <h1 className="text-4xl font-bold text-center">
              Edit Profile
            </h1>

            <p className="text-center text-base-content/70 mb-6">
              Update your profile information
            </p>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>

                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>

                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input
                  type="email"
                  className="input input-bordered w-full"
                  value={emailId}
                  readOnly
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Age</span>
                </label>

                <input
                  type="number"
                  className="input input-bordered w-full"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>

                <select
                  className="select select-bordered w-full"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>

                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </div>

            </div>

            <div className="mt-6">

              <label className="label">
                <span className="label-text">About</span>
              </label>

              <textarea
                rows="4"
                className="textarea textarea-bordered w-full"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />

            </div>

            <div className="mt-6">

              <label className="label">
                <span className="label-text">
                  Skills (comma separated)
                </span>
              </label>

              <input
                type="text"
                className="input input-bordered w-full"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />

            </div>

            <div className="flex justify-end gap-4 mt-10">

              <button
                className="btn btn-outline"
                onClick={() => navigate("/profile")}
              >
                Cancel
              </button>

              <button
                className="btn btn-primary"
                onClick={handleEditProfile}
              >
                Done
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default EditProfile;