const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 bg-white rounded-xl shadow-md text-center">
    <div className="text-indigo-600 text-4xl">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mt-4">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

export default FeatureCard;
