import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import Hero from "./pages/Hero";
import Signup from "./pages/Signup";
import ProtectedLayout from "./pages/ProtectedLayout";
import EditProfile from "./pages/EditProfile";
import Connection from "./pages/Connection";
import Request from "./pages/Request";
import Chat from "./pages/Chat";

function App() {
  return (
    <>

      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />}>
          <Route index element={<Hero />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<ProtectedLayout />}>
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/connection" element={<Connection/>} /> 
          <Route path="/request" element={<Request/>} />  
          <Route path="/chat/:targetUserId" element={<Chat />} /> 

        </Route>

        {/* 404 */}
        <Route path="*" element={<Error />} />

      </Routes>



    </>
  );
}

export default App;