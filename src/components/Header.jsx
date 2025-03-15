import { Link } from "react-router-dom";
import { FaHandHoldingHeart, FaBars, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <header className="fixed py-6 w-full bg-white border-b border-gray-200 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <FaHandHoldingHeart className="text-2xl text-[#161128]" />
            <Link to="/" className="text-xl font-bold text-gray-800">
              EMERGENT
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-gray-700">
            <Link to="/" className="hover:text-indigo-600 transition">
              Home
            </Link>
            <Link to="/find-help" className="hover:text-indigo-600 transition">
              Find Help
            </Link>
            <Link to="/volunteer" className="hover:text-indigo-600 transition">
              Volunteer
            </Link>
            <Link to="/resources" className="hover:text-indigo-600 transition">
              Resources
            </Link>
            <Link to="/about" className="hover:text-indigo-600 transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-indigo-600 transition">
              Contact
            </Link>
            <Link to="/donate" className="hover:text-indigo-600 transition">
              Donate
            </Link>
          </nav>

          {/* Account & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Sign Up Button with Framer Motion */}
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="px-4 py-2 text-gray-600 bg-white border-2 border-gray-900 rounded-lg font-bold"
            >
              Sign Up
            </motion.button>

            {/* Sign In Button with Framer Motion */}
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="px-4 py-2 text-gray-600 bg-white border-2 border-gray-900 rounded-lg font-bold"
            >
              Sign In
            </motion.button>

            {/* Account Icon */}
            <FaUserCircle className="ml-8 text-4xl text-gray-700  hover:text-indigo-600 transition cursor-pointer" />

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-600">
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
