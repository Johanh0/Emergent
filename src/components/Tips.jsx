import React, { useState } from "react";

const Guidelines = () => {
  const [modalContent, setModalContent] = useState(null);

  return (
    <div className="p-6">
      {/* Emergency Information */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div 
          className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer 
                     transition-all transform hover:scale-105 hover:bg-white" 
          onClick={() => setModalContent(
            <>
              <strong>It is always good to have an emergency plan to get properly prepared for natural disasters.</strong>
              <ul className="mt-2 space-y-2">
                <li className="mb-2"><strong>Create an Emergency Plan:</strong> Identify evacuation routes and meeting points. Assign roles to family members (For example: who grabs emergency supplies). Practice drills regularly.</li>
                <li className="mb-2"><strong>Build an Emergency Kit (72-hour survival kit):</strong> Water (1 gallon per person per day), non-perishable food (canned goods, energy bars, etc.), flashlight & extra batteries, first-aid kit & medications, important documents (IDs, insurance, bank info) in a waterproof bag, cash (ATMs might not work), multi-tool & whistle (for signaling help).</li>
                <li className="mb-2"><strong>Stay Informed:</strong> Download weather alert apps (NOAA, Red Cross, FEMA). Follow local emergency services on social media. Get a battery-powered radio for updates.</li>
                <li className="mb-2"><strong>Secure Your Home:</strong> Know how to turn off gas, water, and electricity. Anchor heavy furniture and secure loose objects. Keep emergency supplies in a safe, accessible location.</li>
                <li className="mb-2"><strong>Help Others:</strong> Check on neighbors, pets and those around your area.</li>
              </ul>
            </>
          )}
        >
          <p className="font-semibold">Preparedness</p>
          <p className="text-sm text-gray-600">General Guidelines to be prepared for natural disasters</p>
        </div>
        <div 
          className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer 
                     transition-all transform hover:scale-105 hover:bg-white" 
          onClick={() => setModalContent(
            <>
              <strong className="text-lg">Tips on How to Stay Safe During Different Disasters</strong>
              <ul className="mt-3 space-y-2">
                <li><strong>🌀 Hurricane Safety:</strong> "Stay indoors in a small, windowless room on the lowest floor." Secure doors & windows and avoid glass. Evacuate if ordered—follow local routes. Beware of the eye of the storm; the danger may not be over.</li>
                <li><strong>🌪 Tornado Safety:</strong> "Seek shelter in a basement or an interior room with no windows." Cover your head with a helmet, pillow, or blanket. If in a car, do <strong>not</strong> try to outrun it—find a low ditch and lie flat.</li>
                <li><strong>🌊 Flood Safety:</strong> "Move to higher ground immediately and avoid low-lying areas." Do not walk or drive through floodwaters (just 6 inches can knock you down). Turn off utilities if safe to do so.</li>
                <li><strong>🔥 Wildfire Safety:</strong> "Evacuate early—wildfires spread fast." Wear long sleeves, pants, and an N95 mask to protect from smoke. Close all doors and windows to keep embers out.</li>
                <li><strong>🌍 Earthquake Safety:</strong> "Drop, Cover, and Hold On." Stay indoors and away from windows. If outside, move to an open area away from buildings and power lines.</li>
                <li><strong>🌊 Tsunami Safety:</strong> "Move to higher ground at least 100 feet above sea level." Follow official alerts—tsunamis come in multiple waves. Do not return until authorities declare it safe.</li>
                <li><strong>❄️ Blizzard/Winter Storm Safety:</strong> "Stay indoors and conserve heat." Avoid driving; if stranded, stay in your car and keep the exhaust clear. Stock up on emergency supplies, food, and blankets.</li>
              </ul>
            </>
          )}
        >
          <p className="font-semibold">During the Disaster</p>
          <p className="text-sm text-gray-600">Tips & Guidelines on how to deal with different Natural disasters that could happen in your area.</p>
        </div>
        <div 
          className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer 
                     transition-all transform hover:scale-105 hover:bg-white" 
          onClick={() => setModalContent(
            <>
              <strong className="text-lg">General Safety Guidelines After a Disaster</strong>
              <ul className="mt-3 space-y-2">
                <li><strong>Find Medical Help if Needed:</strong> "Seek immediate medical attention for injuries or health concerns." Locate the nearest hospital, clinic, or emergency medical center. Look up your city and state to find medical facilities close to you!.</li>
                <li><strong>Check-In with Loved Ones:</strong> "Let family and friends know you're safe." Use text messages or social media to avoid overwhelming phone networks.</li>
                <li><strong>Avoid Dangerous Areas:</strong> "Stay away from damaged buildings, downed power lines, and flooded roads." Structural damage may not always be visible.</li>
                <li><strong>Ensure Safe Drinking Water:</strong> "Check for boil water advisories before using tap water." Use bottled or purified water if unsure.</li>
                <li><strong>Check for Gas Leaks and Fire Hazards:</strong> "If you smell gas, turn it off and leave immediately." Do not use candles or matches until you are sure there are no leaks.</li>
              </ul>
            </>
          )}
        >
          <p className="font-semibold">Post-Disaster</p>
          <p className="text-sm text-gray-600">Next steps to take to ensure safety and receive assistance.</p>
        </div>
      </div>
      {modalContent && (
        <div className="fixed inset-0 bg-gray-9 bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h2 className="text-xl font-semibold mb-4">Tips & Resourceful Information</h2>
            <p>{modalContent}</p>
            <button 
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer " 
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

export default Guidelines;
