import { FaLeaf, FaHandsHelping, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Environment: Disaster Relief & Recovery */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">
                    Environment
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <FaLeaf className="text-red-600 text-3xl" />
                  <h3 className="text-xl text-gray-900 font-bold">
                    Disaster Relief & Recovery
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Get access to emergency resources, recovery aid, and relief
                  efforts following natural disasters.
                </p>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t">
                <button className="w-full py-2 bg-red-600 text-white rounded-lg hover:text-red-600 hover:bg-red-100">
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* Community: Support Networks & Assistance */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                    Community
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <FaHandsHelping className="text-orange-600 text-3xl" />
                  <h3 className="text-xl text-gray-900 font-bold">
                    Support Networks & Assistance
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Connect with local food banks, shelters, and community
                  organizations for support when you need it most.
                </p>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t">
                <button className="w-full py-2 bg-orange-600 text-white rounded-lg hover:text-orange-600 hover:bg-orange-100">
                  Find Help
                </button>
              </div>
            </motion.div>

            {/* Safety: Emergency Preparedness & Education */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                    Safety
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <FaShieldAlt className="text-indigo-800 text-3xl" />
                  <h3 className="text-xl text-gray-900 font-bold">
                    Emergency Preparedness & Education
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Access expert safety resources, disaster training, and
                  emergency preparedness guidelines.
                </p>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t">
                <button className="w-full py-2 bg-indigo-800 text-white rounded-lg hover:text-indigo-800 hover:bg-indigo-100">
                  Get Prepared
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
