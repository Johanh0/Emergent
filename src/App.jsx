import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Admin from "./pages/Admin";
// import User from "./pages/User";
import ContactPage from "./pages/Contact";
import Resource from "./pages/Resources";
import AdminAuth from "./pages/admin/AdminAuth";
import UserAuth from "./pages/userAuth";
import Profile from "./pages/Profile";
import Volunteer from "./pages/Volunteer";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminMain from "./pages/admin/AdminMain";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminMessages from "./pages/admin/AdminMessages";
import FindHelp from "./pages/FindHelp";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/findhelp" element={<FindHelp />} />
          <Route path="/resources" element={<Resource />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/auth" element={<UserAuth />} />
          <Route path="/profile" element={<Profile />} />
           <Route path="/volunteer" element={<Volunteer />} />
          <Route path="admin_auth" element={<AdminAuth />} />

          <Route path="admin" element={<AdminDashboard />}>
            <Route path="dashboard" element={<AdminMain />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="messages" element={<AdminMessages />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
