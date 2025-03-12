import { useState } from "react";
import {
  FaHandsHelping,
  FaMapMarkedAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Header />
      <div
        className={
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }
      >
        {/* Navigation */}
        <nav className="p-4 flex justify-between items-center shadow-md bg-blue-500 text-white">
          <h1 className="text-2xl font-bold">AidConnect</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gray-700 rounded-md"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>

        {/* Hero Section */}
        <main className="text-center py-10 px-4">
          <h2 className="text-3xl font-bold">How Can We Help?</h2>
          <p className="text-lg mt-2">
            Find aid, report emergencies, or contribute to relief efforts.
          </p>
        </main>

        {/* Feature Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10">
          <FeatureCard
            icon={<FaExclamationTriangle size={40} />}
            title="Emergency Aid"
            description="Request urgent help and get real-time alerts on crises near you."
          />
          <FeatureCard
            icon={<FaMapMarkedAlt size={40} />}
            title="Find Shelter"
            description="Locate nearby shelters, food banks, and medical centers."
          />
          <FeatureCard
            icon={<FaHandsHelping size={40} />}
            title="Volunteer & Donate"
            description="Offer your support by volunteering or donating essential supplies."
          />
        </div>

        {/* SOS Button */}
        <div className="text-center py-6">
          <button className="px-6 py-3 bg-red-600 text-white font-bold rounded-full text-xl shadow-lg">
            SOS - Request Help
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg text-center">
      <div className="mb-4 text-blue-500">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
    </div>
  );
};

export default Home;
