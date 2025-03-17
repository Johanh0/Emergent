// Updating Admin Login Page (AdminLogin.jsx) with Home Page Design Features
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Submit from "./Submit";
import { RiAdminFill, RiLockPasswordFill } from "react-icons/ri";
import { motion } from "framer-motion";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/v1/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        mode: "cors",
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error trying to login");
      }
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <motion.main
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-700 p-6 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl flex flex-col items-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-black">
          Admin Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-6 w-full max-w-lg">
          <div className="flex items-center border rounded-md p-4 bg-gray-100 hover:shadow-md transition w-full">
            <div className="bg-gray-200 p-3 rounded-l-md">
              <RiAdminFill className="text-indigo-700 text-xl" />
            </div>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full mr-3 outline-none bg-transparent text-gray-700 text-lg"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center border rounded-md p-4 bg-gray-100 hover:shadow-md transition w-full">
            <div className="bg-gray-200 p-3 rounded-l-md">
              <RiLockPasswordFill className="text-indigo-700 text-xl" />
            </div>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full mr-3 outline-none bg-transparent text-gray-700 text-lg"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <motion.div whileHover={{ scale: 1.05 }} className="w-full">
            <Submit text="Login" className="w-full text-lg" />
          </motion.div>
        </form>
      </motion.div>
    </motion.main>
  );
};

export default AdminLogin;
