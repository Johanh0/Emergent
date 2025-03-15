import { Link } from "react-router-dom";
import { FaHandHoldingHeart, FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed py-9 w-full bg-white border-b border-gray-200 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <FaHandHoldingHeart className="text-2xl text-indigo-600" />
            <Link to="/" className="text-xl font-bold text-gray-800">
              LUMYNZ
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-gray-700">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/findhelp" className="hover:text-blue-600">
              Find Help
            </Link>
            <Link to="/volunteer" className="hover:text-blue-600">
              Volunteer
            </Link>
            <Link to="/resources" className="hover:text-blue-600">
              Resources
            </Link>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>{" "}
            {/* ✅ Fixed the Contact Link */}
          </nav>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-gray-600 bg-white border-3 border-gray-900 rounded-lg">
              Sign Up
            </button>
            <button className="px-4 py-2 text-gray-600 bg-white border-3 border-gray-900 rounded-lg">
              Sign In
            </button>
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
