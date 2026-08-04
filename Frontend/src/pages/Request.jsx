import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import {addPendingRequest,removePendingRequest} from "../utils/pendingRequest";


const Request = () => {
    const dispatch = useDispatch();

  const requests = useSelector(
    (store) => store.Request
  );

  const pendingRequest = async () => {
    try {

      const res = await axios.get(
        BASE_URL + "user/requests/received",
        {
          withCredentials: true,
        }
      );

      dispatch(addPendingRequest(res.data));

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {

    pendingRequest();

  }, []);

  const reviewRequest = async (status, requestId) => {
  try {

    const res = await axios.post(
      BASE_URL + "request/review/" + status + "/" + requestId,
      {},
      {
        withCredentials: true,
      }
    );

     dispatch(removePendingRequest(requestId));

    console.log(res.data);

  } catch (err) {
    console.log(err);
  }
};



 



  return (
    <div className="min-h-screen bg-base-100 py-8">

    <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10">
            Your Pending Requests
        </h1>

        <div className="space-y-6">

           

            {requests.map((request)=>{
                
                 const user = request.fromUserId;
                 return(

                

                <div
                    key={request._id}
                    className="card bg-base-200 shadow-xl border border-base-300"
                >

                    <div className="card-body">

                        <div className="flex items-center justify-between">

                            {/* Left */}

                            <div className="flex items-center gap-6 flex-1">

                                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary ml-5">

                                    <img
                                        src={user.photoUrl}
                                        className="w-full h-full object-cover object-[60%_5%]"
                                    />

                                </div>

                                <div className="ml-5 flex-1">

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

                                        {user.skills.map((skill,index)=>(
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


                            <div className="flex flex-row gap-4 w-60 items-center">
                            <button className="btn btn-success text-xl rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            onClick={() => reviewRequest("accepted", request._id)}
                            >
                                Accept
                            </button>

                            <button className="btn btn-success text-xl rounded-full ml-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                             onClick={() => reviewRequest("rejected", request._id)}
                            >
                                Reject
                            </button>
                            </div>





                        </div>

                    </div>

                </div>
                 )

})}

        </div>

    </div>

</div>
  )
}

export default Request
