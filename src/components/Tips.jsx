import React, { useState } from "react";

const Guidelines = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState(null);

  // Main dropdowns
  const mainDropdowns = [
    {
      id: 1,
      title: "Pre-Disaster",
      content: (
        <div className="p-4 bg-gray-50 rounded-lg shadow-inner text-black">
          <strong>
            It is always good to have an emergency plan to get properly prepared
            for natural disasters.
          </strong>
          <ul className="space-y-2">
            <li className="mb-2">
              <strong>Create an Emergency Plan:</strong> Identify evacuation
              routes and meeting points. Assign roles to family members (For
              example: who grabs emergency supplies). Practice drills regularly.
            </li>
            <li className="mb-2">
              <strong>Build an Emergency Kit (72-hour survival kit):</strong>{" "}
              Water (1 gallon per person per day), non-perishable food (canned
              goods, energy bars, etc.), flashlight & extra batteries, first-aid
              kit & medications, important documents (IDs, insurance, bank info)
              in a waterproof bag, cash (ATMs might not work), multi-tool &
              whistle (for signaling help).
            </li>
            <li className="mb-2">
              <strong>Stay Informed:</strong> Download weather alert apps (NOAA,
              Red Cross, FEMA). Follow local emergency services on social media.
              Get a battery-powered radio for updates.
            </li>
            <li className="mb-2">
              <strong>Secure Your Home:</strong> Know how to turn off gas,
              water, and electricity. Anchor heavy furniture and secure loose
              objects. Keep emergency supplies in a safe, accessible location.
            </li>
            <li className="mb-2">
              <strong>Help Others:</strong> Check on neighbors, pets and those
              around your area.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      title: "During the Disaster",
      content: (
        <div className="space-y-2 text-black">
          {[
            {
              id: "tornado",
              title: "Emergency Tips for Tornado Safety 🌪",
              content: (
                <ul className="list-disc pl-5 space-y-2 text-black">
                  <li>
                    <strong>Seek shelter</strong> in a basement or an interior
                    room with no windows.
                  </li>
                  <li>
                    <strong>Cover your head</strong> with a helmet, pillow, or
                    blanket.
                  </li>
                  <li>
                    If in a car, do <strong>not</strong> try to outrun it—find a
                    low ditch and lie flat.
                  </li>
                </ul>
              ),
            },
            {
              id: "flood",
              title: "Emergency Tips for Flood Safety 🌊",
              content: (
                <ul className="list-disc pl-5 space-y-2 text-black">
                  <li>
                    <strong>Move to higher ground</strong> immediately and avoid
                    low-lying areas.
                  </li>
                  <li>
                    Do <strong>not</strong> walk or drive through floodwaters
                    (just 6 inches can knock you down).
                  </li>
                  <li>
                    <strong>Turn off utilities</strong> if safe to do so.
                  </li>
                </ul>
              ),
            },
            {
              id: "hurricane",
              title: "Emergency Tips for Hurricane Safety 🌀",
              content: (
                <ul className="list-disc pl-5 space-y-2 text-black">
                  <li>
                    <strong>Stay indoors</strong> in a small, windowless room on
                    the lowest floor.
                  </li>
                  <li>
                    <strong>Secure doors & windows</strong> and avoid glass.
                  </li>
                  <li>
                    <strong>Evacuate if ordered</strong>—follow local routes.
                  </li>
                  <li>
                    Beware of the <strong>eye of the storm</strong>; the danger
                    may not be over.
                  </li>
                </ul>
              ),
            },
            {
              id: "wildfire",
              title: "Emergency Tips for Wildfire Safety 🔥",
              content: (
                <ul className="list-disc pl-5 space-y-2 text-black">
                  <li>
                    <strong>Evacuate early</strong>—wildfires spread fast.
                  </li>
                  <li>
                    <strong>Wear protective clothing</strong>: long sleeves,
                    pants, and an N95 mask to protect from smoke.
                  </li>
                  <li>
                    <strong>Close all doors and windows</strong> to keep embers
                    out.
                  </li>
                </ul>
              ),
            },
            {
              id: "earthquake",
              title: "Emergency Tips for Earthquake Safety 🌍",
              content: (
                <ul className="list-disc pl-5 space-y-2 text-black">
                  <li>
                    <strong>Drop, Cover, and Hold On.</strong>
                  </li>
                  <li>
                    <strong>Stay indoors</strong> and away from windows.
                  </li>
                  <li>
                    If outside, <strong>move to an open area</strong> away from
                    buildings and power lines.
                  </li>
                </ul>
              ),
            },
            {
              id: "tsunami",
              title: "Emergency Tips for Tsunami Safety 🌊",
              content: (
                <ul className="list-disc pl-5 space-y-2 text-black">
                  <li>
                    <strong>Move to higher ground</strong> at least 100 feet
                    above sea level.
                  </li>
                  <li>
                    <strong>Follow official alerts</strong>—tsunamis come in
                    multiple waves.
                  </li>
                  <li>
                    Do <strong>not return</strong> until authorities declare it
                    safe.
                  </li>
                </ul>
              ),
            },
            {
              id: "blizzard",
              title: "Emergency Tips for Blizzard & Winter Storm Safety ❄️",
              content: (
                <ul className="list-disc pl-5 space-y-2 text-black">
                  <li>
                    <strong>Stay indoors</strong> and conserve heat.
                  </li>
                  <li>
                    <strong>Avoid driving</strong>; if stranded, stay in your
                    car and keep the exhaust clear.
                  </li>
                  <li>
                    <strong>Stock up</strong> on emergency supplies, food, and
                    blankets.
                  </li>
                </ul>
              ),
            },
          ].map((disaster) => (
            <div key={disaster.id} className="flex flex-col items-center">
              <button
                className="w-11/12 bg-gray-200 p-3 rounded-lg shadow-md cursor-pointer 
                           transition-all hover:bg-gray-300 text-center"
                onClick={() =>
                  setActiveNestedDropdown(
                    activeNestedDropdown === disaster.id ? null : disaster.id
                  )
                }
              >
                <p className="font-semibold">{disaster.title}</p>
              </button>
              {/* Nested Dropdown Content */}
              {activeNestedDropdown === disaster.id && (
                <div className="mt-2 p-4 bg-gray-50 rounded-lg shadow-inner w-11/12">
                  {disaster.content}
                </div>
              )}
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 3,
      title: "Post-Disaster",
      content: (
        <div className="p-4 bg-gray-50 rounded-lg shadow-inner text-black">
          <strong className="text-lg">
            General Safety Guidelines After a Disaster
          </strong>
          <ul className="mt-3 space-y-2">
            <li>
              <strong>Find Medical Help if Needed:</strong> "Seek immediate
              medical attention for injuries or health concerns." Locate the
              nearest hospital, clinic, or emergency medical center. Look up
              your city and state to find medical facilities close to you!.
            </li>
            <li>
              <strong>Check-In with Loved Ones:</strong> "Let family and friends
              know you're safe." Use text messages or social media to avoid
              overwhelming phone networks.
            </li>
            <li>
              <strong>Avoid Dangerous Areas:</strong> "Stay away from damaged
              buildings, downed power lines, and flooded roads." Structural
              damage may not always be visible.
            </li>
            <li>
              <strong>Ensure Safe Drinking Water:</strong> "Check for boil water
              advisories before using tap water." Use bottled or purified water
              if unsure.
            </li>
            <li>
              <strong>Check for Gas Leaks and Fire Hazards:</strong> "If you
              smell gas, turn it off and leave immediately." Do not use candles
              or matches until you are sure there are no leaks.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 w-full md:mt-20">
      {/* Main Dropdowns */}
      <div className="space-y-4 w-full">
        {mainDropdowns.map((dropdown) => (
          <div key={dropdown.id} className="w-full">
            <button
              className="w-full bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer 
                         transition-all hover:bg-white text-left text-black"
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === dropdown.id ? null : dropdown.id
                )
              }
            >
              <p className="font-semibold">{dropdown.title}</p>
            </button>
            {/* Main Dropdown Content */}
            {activeDropdown === dropdown.id && (
              <div className="mt-2 w-full">{dropdown.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guidelines;
