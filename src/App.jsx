import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import UserProfile from "./components/Profile/UserProfile";

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/meeting" element={<UserProfile />} />
        <Route path="/user/likedProfiles" element={<UserProfile />} />
        <Route path="/user/hiredList" element={<UserProfile />} />
        <Route path="/user/complaint" element={<UserProfile />} />
        <Route path="/user/feedback" element={<UserProfile />} />
      </Routes>
      {/* <Footer/>  */}
    </Router>
  );
}

export default App;
