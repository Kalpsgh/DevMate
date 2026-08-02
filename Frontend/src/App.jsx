import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  return (
    <>

      <Routes>

        {/* Pages with Navbar */}
        <Route path="/" element={<Home />}>
          
          <Route path="profile" element={<Profile />} />
          
        </Route>

        {/* Pages without Navbar */}
        <Route path="/login" element={<Login />} />

        {/* 404 */}
        <Route path="*" element={<Error />} />

      </Routes>



    </>
  );
}

export default App;