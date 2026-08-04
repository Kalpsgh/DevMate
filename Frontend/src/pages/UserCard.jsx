import React from 'react'

const UserCard = ({ user }) => {
    return (
        <div className="flex justify-center items-center py-3 mt-2">

            <div className="card w-80  bg-base-300 shadow-2xl border border-base-300 ">

                <figure className="pt-5 flex justify-center">

                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg">

                        <img
                            src={user?.photoUrl}
                            alt="Profile"
                            className="w-full h-full object-cover object-[60%_5%]"
                        />

                    </div>

                </figure>

                <div className="card-body items-center text-center p-5">

                    <h2 className="card-title text-2xl font-bold text-primary">
                        {user?.firstName} {user?.lastName}
                    </h2>

                    <p className="text-base text-base-content/70">
                        {user?.age} Years • {user?.gender}
                    </p>

                    <p className="text-sm text-base-content/80 leading-6 mt-2 line-clamp-3">
                        {user?.about}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mt-3">

                        {user?.skills?.map((skill, index) => (
                            <span
                                key={index}
                                className="badge badge-outline"
                            >
                                {skill}
                            </span>
                        ))}

                    </div>

                    <div className="card-actions justify-center w-full mt-5 gap-3">

                        <button className="btn btn-success flex-1 rounded-full">
                            Interested <FaHeart />
                        </button>

                        <button className="btn btn-error flex-1 rounded-full">
                            Ignore <FaTimes />
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default UserCard
