


import React, { useState } from "react";
import { PhoneCall, Search, X } from "lucide-react";

const API_KEY = "v62URsZ9ZNQXp7x5f3qQAUyT2PE8KhRFkCDtXcng";

const Resource = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [modalContent, setModalContent] = useState(null);

  const handleSearch = async () => {
    if (!city || !state) return;
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/hospitals?city=${city}&state=${state}&limit=10`, {
        headers: { 'X-Api-Key': API_KEY }
      });
      const data = await response.json();
      setHospitals(data || []);
      setSelectedHospital(null);
    } catch (error) {
      console.error("Error fetching hospital data:", error);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Resource</h1>
        <button 
          className="bg-black text-white px-4 py-2 rounded-lg flex items-center cursor-pointer"
          onClick={() => setModalContent("Food Bank Resource: Call 202-627-3939 for assistance.")}
        >
          <PhoneCall className="mr-2" size={18} /> Looking For Food?
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Find Nearby Hospitals During Emergency</h2>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Enter City" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg" 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Enter State (e.g., NY)" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg" 
            value={state} 
            onChange={(e) => setState(e.target.value)} 
          />
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center cursor-pointer" 
            onClick={handleSearch}
          >
            <Search className="mr-2" size={18} /> Search
          </button>
        </div>
      </div>

      {/* Results & Video Section */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {/* Hospital List */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">Nearby Hospitals ({hospitals.length} found)</h3>
          {hospitals.map((hospital, index) => (
            <div 
              key={index} 
              className="border-b pb-3 mb-3 cursor-pointer" 
              onClick={() => setSelectedHospital(hospital)}
            >
              <p className="font-semibold">{hospital.name}</p>
              <p className="text-sm">{hospital.address}</p>
              <p className="text-sm font-semibold">{hospital.phone}</p>
            </div>
          ))}
        </div>

         {/* Embedded Video Section */}
         <div className="bg-gray-200 flex justify-center items-center text-gray-600 text-lg font-semibold rounded-lg shadow-md">
        <iframe width="560" height="415" src="https://www.youtube.com/embed/gds9yFMEm2k?si=XYEXLyKFKrvjouJd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

      {/* Emergency Information */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer" onClick={() => setModalContent("First Aid Tips: Always clean wounds with antiseptic, apply pressure to stop bleeding, and seek medical help if necessary.")}> 
          <p className="font-semibold">First Aid Tips</p>
          <p className="text-sm text-gray-600">Basic emergency care guidelines</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer" onClick={() => setModalContent("Ambulance Services: Call 911 for emergency transport. Have your location ready for quick dispatch.")}> 
          <p className="font-semibold">Ambulance Services</p>
          <p className="text-sm text-gray-600">Emergency transport information</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer" onClick={() => setModalContent("Disaster Updates: Stay tuned to local news and emergency alerts for real-time disaster information.")}> 
          <p className="font-semibold">Disaster Updates</p>
          <p className="text-sm text-gray-600">Latest emergency alerts</p>
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-gray-9 bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h2 className="text-xl font-semibold mb-4">Information</h2>
            <p>{modalContent}</p>
            <button 
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer" 
              onClick={() => setModalContent(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Resource;
