import React, { useState, useEffect } from "react";
import { PhoneCall, Search } from "lucide-react";
import axios from "axios";
import Guidelines from "../components/Tips";

const API_KEY = import.meta.env.VITE_HOSPITAL_API_KEY;
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_MAPS_API_KEY;
const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY;

const FindHelp = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [shelters, setShelters] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [isHospitalMode, setIsHospitalMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!city || !state) return;
    setLoading(true);
    setError(null);

    if (isHospitalMode) {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/hospitals?city=${city}&state=${state}&limit=10`,
          {
            headers: { "X-Api-Key": API_KEY },
          }
        );
        const data = await response.json();
        setHospitals(data || []);
        setSelectedLocation(null);
      } catch (error) {
        console.error("Error fetching hospital data:", error);
        setError("Failed to fetch hospital data.");
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const response = await axios.get(
          "https://homeless-shelters-and-foodbanks-api.p.rapidapi.com/resources",
          {
            params: { city, state },
            headers: {
              "x-rapidapi-key": RAPID_API_KEY,
              "x-rapidapi-host":
                "homeless-shelters-and-foodbanks-api.p.rapidapi.com",
            },
          }
        );

        if (Array.isArray(response.data) && response.data.length > 0) {
          // Limit the results to 5
          const limitedResults = response.data.slice(0, 5);
          setShelters(
            limitedResults.map((item) => ({
              name: item?.name || "No name available",
              city: item?.city || "No city available",
              state: item?.state || "No state available",
              description: item?.description || "No description available",
              type: item?.type || "No type available",
              full_address: item?.full_address || "No address available",
              phone_number: item?.phone_number || "No phone number available",
              business_hours:
                item?.business_hours || "No business hours available",
              latitude: item?.latitude || null,
              longitude: item?.longitude || null,
            }))
          );
        } else {
          setShelters([]);
        }
      } catch (error) {
        console.error("Error fetching shelter data:", error);
        setError("Failed to fetch shelter data.");
      } finally {
        setLoading(false);
      }
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
          if (selectedLocation) {
            initMap();
          }
        };
      } else {
        initMap();
      }
    };

    // Initialize map
    const initMap = () => {
      if (!selectedLocation) return;
      const { latitude, longitude } = selectedLocation;
      const location = {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
      };

      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location,
      });

      new window.google.maps.Marker({
        position: location,
        map: map,
      });
    };

    loadGoogleMaps();
  }, [selectedLocation]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ✅ Gradient Header Section */}
      <section className="py-20 pb-34  bg-[linear-gradient(to_right,#161128,#E11D48,#F97316,#161128)] text-white text-center ">
        <h1 className="text-5xl font-bold">Find Help</h1>
        <p className="mt-10 text-lg max-w-3xl mx-auto">
          Use this page to help you locate medical assistance, food banks, and
          shelters near you. Just Click the results to display the location!
        </p>
      </section>
      <div className="p-6 rounded-lg max-w-5xl mx-auto mt-25 mb-25 bg-white text-black">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">
            Select an option then add your location:
          </h1>
          <button
            className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center cursor-pointer"
            onClick={() =>
              setModalContent(
                "For More Assistance, Dial 211 Which Serves As a Central Point For Accessing Information And Referrals To Various Social Services And Community Organizations."
              )
            }
          >
            <PhoneCall className="mr-2" size={18} /> Need More Assistance?
          </button>
        </div>

        {/* Buttons for Food Banks/Shelters and Hospitals */}
        <div className="flex gap-2 mb-4">
          <button
            className={`${
              !isHospitalMode
                ? "bg-black text-white" // Active state (no hover effect)
                : "bg-gray-100 text-black hover:bg-white hover:text-black" // Inactive state (with hover effect)
            } px-6 py-2 rounded-lg transition-colors cursor-pointer w-full font-bold`}
            onClick={() => setIsHospitalMode(false)}
          >
            Food Banks & Shelters
          </button>
          <button
            className={`${
              isHospitalMode
                ? "bg-black text-white" // Active state (no hover effect)
                : "bg-gray-100 text-black hover:bg-white hover:text-black" // Inactive state (with hover effect)
            } px-6 py-2 rounded-lg transition-colors cursor-pointer w-full font-bold`}
            onClick={() => setIsHospitalMode(true)}
          >
            Hospitals & Medical Centers
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            {isHospitalMode
              ? "Find Nearby Medical Assistance"
              : "Find Nearby Food Banks and Shelters"}
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
              className="bg-indigo-900  hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center cursor-pointer"
              onClick={handleSearch}
            >
              <Search className="mr-2" size={18} /> Search
            </button>
          </div>
        </div>

        {/* Results Section */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {/* List of Results */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">
              {isHospitalMode
                ? `Nearby Hospitals (${hospitals.length} found)`
                : `Nearby Food Banks and Shelters (${shelters.length} found)`}
            </h3>
            {loading && <p className="text-gray-500">Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {isHospitalMode
              ? hospitals.map((hospital, index) => (
                  <div
                    key={index}
                    className="border-b pb-3 mb-3 cursor-pointer"
                    onClick={() => setSelectedLocation(hospital)}
                  >
                    <p className="font-semibold">{hospital.name}</p>
                    <p className="text-sm">{hospital.address}</p>
                    <p className="text-sm font-semibold">{hospital.phone}</p>
                  </div>
                ))
              : shelters.map((shelter, index) => (
                  <div
                    key={index}
                    className="border-b pb-3 mb-3 cursor-pointer"
                    onClick={() => setSelectedLocation(shelter)}
                  >
                    <p className="font-semibold">
                      {shelter.name || "No name available"}
                    </p>
                    <p className="text-sm">
                      {shelter.full_address || "No address available"}
                    </p>
                    <p className="text-sm font-semibold">
                      {shelter.phone_number || "No phone number available"}
                    </p>
                  </div>
                ))}
          </div>

          {/* Map Section */}
          <div className="bg-gray-200 flex justify-center items-center text-gray-600 text-lg font-semibold rounded-lg shadow-md">
            <div id="map" className="w-full h-96"></div>
          </div>
        </div>

        {/* <Guidelines /> */}

        {/* MODAL */}
        {modalContent && (
          <div className="fixed inset-0 bg-gray-9 bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
              {/* <h2 className="text-xl font-semibold mb-4">Assistance Information</h2> */}
              <p>{modalContent}</p>
              <button
                className="mt-4 bg-black text-white px-4 py-2 rounded-lg cursor-pointer"
                onClick={() => setModalContent(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Call to Action */}
      <section className="py-16  bg-[#161128] text-white text-center ">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Having an Emergency?</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Find the right contact for your emergency.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a
              href="https://www.apartmentguide.com/blog/emergency-phone-numbers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 bg-white text-red-600 font-bold rounded-md shadow-lg hover:bg-red-100 transition-all">
                Find Contact
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindHelp;
