import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import Hero from "./pages/Hero";
import Signup from "./pages/Signup";
import ProtectedLayout from "./pages/ProtectedLayout";
import EditProfile from "./pages/EditProfile";

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
        </Route>

        {/* 404 */}
        <Route path="*" element={<Error />} />

      </Routes>



    </>
  );
}

export default App;