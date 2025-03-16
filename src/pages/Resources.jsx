import React, { useState, useEffect } from "react";
import { PhoneCall, Search } from "lucide-react";
import Guidelines from "../components/Tips";

const API_KEY = "v62URsZ9ZNQXp7x5f3qQAUyT2PE8KhRFkCDtXcng";
const GOOGLE_MAPS_API_KEY = "AIzaSyCFqut1Aw8Ob86-0W_h5QswsWvN-y5HqZE"; // Your Google Maps API Key

const Resource = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [modalContent, setModalContent] = useState(null);

  const handleSearch = async () => {
    if (!city || !state) return;
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/hospitals?city=${city}&state=${state}&limit=10`,
        {
          headers: { "X-Api-Key": API_KEY },
        }
      );
      const data = await response.json();
      setHospitals(data || []);
      setSelectedHospital(null);
    } catch (error) {
      console.error("Error fetching hospital data:", error);
    }
  };

  useEffect(() => {
    // Load Google Maps API script
    const loadGoogleMaps = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => {
          if (selectedHospital) {
            initMap();
          }
        };
      } else {
        initMap();
      }
    };

    // Initialize map
    const initMap = () => {
      if (!selectedHospital) return;
      const { latitude, longitude } = selectedHospital;
      const hospitalLocation = {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
      };

      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: hospitalLocation,
      });

      new window.google.maps.Marker({
        position: hospitalLocation,
        map: map,
      });
    };

    loadGoogleMaps();
  }, [selectedHospital]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Resources</h1>
        <button
          className="bg-black text-white px-4 py-2 rounded-lg flex items-center cursor-pointer"
          onClick={() =>
            setModalContent("Dial 211 to find emergency housing resources and food bank resources for anywhere.")
          }
        >
          <PhoneCall className="mr-2" size={18} /> Need Assistance?
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          Find Nearby Hospitals During Emergency
        </h2>
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

      {/* Results Section */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {/* Hospital List */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">
            Nearby Hospitals ({hospitals.length} found)
          </h3>
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

        {/* Map Section */}
        <div className="bg-gray-200 flex justify-center items-center text-gray-600 text-lg font-semibold rounded-lg shadow-md">
          <div id="map" className="w-full h-96"></div>
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Emergency Preparedness Guide</h2>
        <div className="w-full aspect-w-16 aspect-h-9">
          <iframe
            width="100%"
            height="415"
            src="https://www.youtube.com/embed/gds9yFMEm2k?si=XYEXLyKFKrvjouJd"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <Guidelines />

      {/* MODAL */}
      {modalContent && (
        <div className="fixed inset-0 bg-gray-9 bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h2 className="text-xl font-semibold mb-4">Assistance Information</h2>
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
