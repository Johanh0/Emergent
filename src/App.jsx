import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminAuth from "./pages/adminAuth";
import UserAuth from "./pages/userAuth";
import Profile from "./pages/Profile";
import AdminProfile from "./pages/AdminProfile";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin_auth" element={<AdminAuth />} />
          <Route path="/auth" element={<UserAuth />} />
          <Route path="/admin_profile" element={<AdminProfile />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
