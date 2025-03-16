import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="p-6 bg-white rounded-xl shadow-md text-center border border-gray-200"
  >
    <div className="text-[#161128] text-center text-4xl">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mt-4">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </motion.div>
);

export default FeatureCard;
