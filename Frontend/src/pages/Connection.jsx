import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addConnection } from "../utils/connectionSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Connections = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const connections = useSelector(
        (store) => store.connection
    );

    const getConnections = async () => {
        try {

            const res = await axios.get(
                BASE_URL + "user/connection",
                {
                    withCredentials: true,
                }
            );

            dispatch(addConnection(res.data));

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {

        getConnections();

    }, []);

    if (!connections || connections.length === 0) {
        return (
            <h1 className="text-3xl text-center mt-20">
                No Connections Yet 🤝
            </h1>
        );
    }


    return (
        <div className="min-h-screen bg-base-100 py-8">

            <div className="max-w-3xl mx-auto">

                <h1 className="text-4xl font-bold text-center mb-10">
                    Your Connections
                </h1>

                <div className="space-y-6">

                    {connections.map((user) => (

                        <div
                            key={user._id}
                            className="card bg-base-200 shadow-xl border border-base-300"
                        >

                            <div className="card-body">

                                <div className="flex items-center justify-between">

                                    {/* Left */}

                                    <div className="flex items-center gap-6 ml-3">

                                        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary ml-5">

                                            <img
                                                src={user.photoUrl}
                                                className="w-full h-full object-cover object-[60%_5%]"
                                            />

                                        </div>

                                        <div className="ml-5">

                                            <h2 className="text-3xl font-bold text-primary">
                                                {user.firstName} {user.lastName}
                                            </h2>

                                            <p className="text-base-content/70 mt-1">
                                                {user.age} Years • {user.gender}
                                            </p>

                                            <p className="mt-3">
                                                {user.about}
                                            </p>

                                            <div className="flex gap-2 flex-wrap mt-3">

                                                {user.skills.map((skill, index) => (
                                                    <span
                                                        key={index}
                                                        className="badge badge-outline"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}

                                            </div>

                                        </div>

                                    </div>

                                    {/* Right */}


                                    <button
                                        className="btn btn-success rounded-full px-10"
                                        onClick={() =>
                                            navigate("/chat/" + user._id, {
                                                state: { user },
                                            })
                                        }
                                    >
                                        Chat
                                    </button>


                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}
export default Connections
