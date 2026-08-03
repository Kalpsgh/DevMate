import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import Hero from "./pages/Hero";
import Signup from "./pages/Signup";

function App() {
  return (
    <>

      <Routes>

        {/* Pages with Navbar */}
        <Route path="/" element={<Home />}>
           <Route index element={<Hero />} />
          
          <Route path="/profile" element={<Profile />} />
          <Route path="/feed" element={<Feed />} />
          
        </Route>

        {/* Pages without Navbar */}
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup/>}/>

        {/* 404 */}
        <Route path="*" element={<Error />} />

      </Routes>



    </>
  );
}

export default App;