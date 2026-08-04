import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  return (
    <div className="bg-base-100 py-3 px-4">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Card */}

          <div className="card bg-base-200 shadow-2xl border border-base-300 h-fit">

            <div className="card-body items-center text-center">

              <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl">

                <img
                  src={user?.photoUrl}
                  alt="Profile"
                  className="w-full h-full object-cover object-[60%_5%]"
                />

              </div>

              <h1 className="text-4xl font-bold mt-5">
                {user?.firstName} {user?.lastName}
              </h1>

              <p className="text-lg mt-3 leading-6">
                {user?.about}
              </p>

              <div className="mt-6 w-full">

                <h2 className="text-lg font-semibold mb-3">
                  Skills
                </h2>

                <div className="flex flex-wrap justify-center gap-2">

                  {user?.skills?.map((skill, index) => (
                    <span
                      key={index}
                      className="badge badge-primary badge-md px-4 py-3"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>



            </div>

          </div>

          {/* Right Card */}

          <div className="lg:col-span-2">

            <div className="card bg-base-200 shadow-2xl border border-base-300">

              <div className="card-body">

                <h2 className="text-3xl font-bold mb-6">
                  Profile Information
                </h2>

                <div className="grid md:grid-cols-2 gap-8">

                  <div>

                    <p className="text-sm text-base-content/60">
                      First Name
                    </p>

                    <h3 className="text-lg font-semibold mt-2">
                      {user?.firstName}
                    </h3>

                  </div>

                  <div>

                    <p className="text-sm text-base-content/60">
                      Last Name
                    </p>

                    <h3 className="text-lg font-semibold mt-2">
                      {user?.lastName}
                    </h3>

                  </div>

                  <div>

                    <p className="text-sm text-base-content/60">
                      Email
                    </p>

                    <h3 className="text-lg font-semibold mt-2 break-all">
                      {user?.emailId}
                    </h3>

                  </div>

                  <div>

                    <p className="text-sm text-base-content/60">
                      Age
                    </p>

                    <h3 className="text-lg font-semibold mt-2">
                      {user?.age} Years
                    </h3>

                  </div>

                  <div>

                    <p className="text-sm text-base-content/60">
                      Gender
                    </p>

                    <h3 className="text-lg font-semibold mt-2">
                      {user?.gender}
                    </h3>

                  </div>

                </div>

                <div className="flex justify-end gap-4 mt-16">

                  <button
                    className="btn btn-outline"
                    onClick={() => navigate("/feed")}
                  >
                    Cancel
                  </button>

                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("/profile/edit")}
                  >
                    Edit Profile
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;