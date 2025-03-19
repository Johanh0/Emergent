import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
// import Admin from "./pages/Admin";
// import User from "./pages/User";
import ContactPage from "./pages/Contact";
import Resource from "./pages/Resources";
import AdminAuth from "./pages/admin/AdminAuth";
import UserAuth from "./pages/UserAuth";
import Profile from "./pages/Profile";
import Volunteer from "./pages/Volunteer";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminMain from "./pages/admin/AdminMain";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminMessages from "./pages/admin/AdminMessages";
import About from "./pages/About";
import FindHelp from "./pages/FindHelp";
import NotFound from "./pages/NotFound";

// Import Header & Footer
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderRoutes = ["/auth", "/admin_auth"];
  const isHidden =
    hideHeaderRoutes.includes(location.pathname) ||
    location.pathname.startsWith("/admin");

  return (
    <>
      {!isHidden && <Header />}

      <main className="min-h-screen min-w-screen w-full ">{children}</main>

      {!isHidden && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-help" element={<FindHelp />} />
          <Route path="/resources" element={<Resource />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/auth" element={<UserAuth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />

          {/* Admin Routes */}
          <Route path="/admin_auth" element={<AdminAuth />} />
          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="dashboard" element={<AdminMain />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="messages" element={<AdminMessages />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
