// Updating Admin Navbar with Animations
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { motion } from "framer-motion";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/v1/admin/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        credentials: "include",
      });
      navigate("/admin_auth");
    } catch (error) {}
  };

  return (
    <motion.aside
      className="flex lg:flex-col justify-between w-full h-full rounded-2xl bg-bunker-950 text-white shadow-2xl p-10"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section
        className="flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl text-center font-bold">Emergent</h3>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <ul className="flex flex-row lg:flex-col gap-10 lg:gap-5">
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/admin/dashboard" className="flex gap-5 items-center">
              <TbLayoutDashboardFilled className="text-3xl lg:text-md" />
              <p className="hidden lg:block text-md font-bold">Dashboard</p>
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/admin/users" className="flex gap-5 items-center">
              <FaUserAlt className="text-3xl lg:text-md" />
              <p className="hidden lg:block text-md font-bold">Users</p>
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/admin/messages" className="flex gap-5 items-center">
              <MdMarkEmailUnread className="text-3xl lg:text-md" />
              <p className="hidden lg:block text-md font-bold">Messages</p>
            </Link>
          </motion.li>
        </ul>
      </motion.section>

      <motion.section
        onClick={handleLogout}
        className="flex gap-3 items-center cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <HiOutlineLogout className="text-3xl lg:text-2xl" />
        <p className="hidden lg:block text-lg font-bold">Logout</p>
      </motion.section>
    </motion.aside>
  );
};

export default AdminNavbar;
