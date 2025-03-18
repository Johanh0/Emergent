// Updating Admin Dashboard Page (AdminDashboard.jsx) with Home Page Design Features
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdminLoggedIn = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/admin/profile",
          {
            credentials: "include",
          }
        );
        if (!response.ok) {
          throw new Error("Admin is not logged in");
        }
      } catch (error) {
        navigate("/admin_auth");
        throw new Error(error);
      }
    };
    isAdminLoggedIn();
  }, [navigate]);

  return (
    <motion.section
      className="absolute left-0 top-0 flex flex-col lg:flex-row gap-15 p-5 w-screen min-h-screen h-fit bg-gradient-to-r from-purple-600 to-indigo-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="w-full lg:w-1/6">
        <AdminNavbar />
      </section>
      <motion.section
        className="w-full container mx-auto p-6 bg-white shadow-lg rounded-lg"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Admin Dashboard
        </h1>
        <Outlet />
      </motion.section>
    </motion.section>
  );
};

export default AdminDashboard;
