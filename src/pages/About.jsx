import {
  FaGlobe,
  FaUsers,
  FaShieldAlt,
  FaHandsHelping,
  FaLifeRing,
  FaLightbulb,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="text-white py-20 bg-[linear-gradient(to_right,#161128,#E11D48,#F97316,#161128)] text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl mt-7 font-bold mb-4">About Us</h1>
            <p className="text-lg max-w-3xl mx-auto">
              We are committed to providing essential resources, support, and
              safety education to communities in need. Whether you are looking
              for help, seeking to volunteer, or want to prepare for
              emergencies, we are here for you.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600" data-testid="Our mission">
              Our mission is to empower individuals and communities by
              connecting them with life-saving resources, educational tools, and
              emergency response networks. We strive to build a world where
              everyone has access to the help they need, when they need it most.
            </p>
          </div>
        </section>

        {/* What We Offer - Animated */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {/* Disaster Relief */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-50 rounded-lg p-6 shadow-md"
              >
                <FaGlobe className="text-red-600 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Disaster Relief & Recovery
                </h3>
                <p className="text-gray-600">
                  We provide immediate support and long-term recovery resources
                  for individuals and communities affected by natural disasters.
                </p>
              </motion.div>

              {/* Community Aid */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-50 rounded-lg p-6 shadow-md"
              >
                <FaUsers className="text-orange-600 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Community Assistance
                </h3>
                <p className="text-gray-600">
                  Connecting people with food banks, shelters, and essential aid
                  to ensure that no one is left behind.
                </p>
              </motion.div>

              {/* Emergency Preparedness */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-50 rounded-lg p-6 shadow-md"
              >
                <FaShieldAlt className="text-indigo-800 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid="safety & emergency">
                  Safety & Emergency Education
                </h3>
                <p className="text-gray-600">
                  Equipping communities with the knowledge and tools they need
                  to stay safe and prepared in any emergency.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works - Animated */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Find Help */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-50 rounded-lg p-6 shadow-md"
              >
                <FaLifeRing className="text-indigo-400 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Find Help
                </h3>
                <p className="text-gray-600">
                  Instantly connect with emergency services, shelters, and
                  community support organizations in your area.
                </p>
              </motion.div>

              {/* Get Involved */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-50 rounded-lg p-6 shadow-md"
              >
                <FaHandsHelping className="text-orange-400 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Volunteer & Give Back
                </h3>
                <p className="text-gray-600">
                  Make a direct impact by volunteering your time, skills, and
                  resources to assist those in need.
                </p>
              </motion.div>

              {/* Learn & Prepare */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-50 rounded-lg p-6 shadow-md"
              >
                <FaLightbulb className="text-red-400 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Learn & Prepare
                </h3>
                <p className="text-gray-600">
                  Access educational materials, safety tips, and disaster
                  preparedness training to protect yourself and others.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-white text-center ">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4">Join Us Today</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Be part of a movement that provides emergency assistance, supports
              communities, and educates people on safety.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <button className="px-6 py-3 bg-white text-blue-900 font-bold rounded-md shadow-lg hover:bg-opacity-80 transition-all">
                Get Involved
              </button>
              <button className="px-6 py-3 border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-blue-900 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
