import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Guidelines = () => {
  const mainSections = [
    {
      id: 1,
      title: "Pre-Disaster",
      tips: [
        {
          id: "1a",
          text: "Create an Emergency Plan: Identify evacuation routes and meeting points.",
        },
        {
          id: "1b",
          text: "Build an Emergency Kit: Store essentials like water, food, flashlight, batteries, and first-aid kits.",
        },
        {
          id: "1c",
          text: "Stay Informed: Use weather alert apps and follow local emergency services.",
        },
        {
          id: "1d",
          text: "Secure Your Home: Anchor furniture and secure loose objects.",
        },
        {
          id: "1e",
          text: "Help Others: Check on neighbors, pets, and those in need.",
        },
      ],
    },
    {
      id: 2,
      title: "During the Disaster",
      tips: [
        {
          id: "2a",
          text: "Tornado Safety: Shelter in a basement or windowless room.",
        },
        {
          id: "2b",
          text: "Flood Safety: Move to higher ground and avoid floodwaters.",
        },
        {
          id: "2c",
          text: "Hurricane Safety: Secure doors & windows and stay in a small, windowless room.",
        },
        {
          id: "2d",
          text: "Wildfire Safety: Evacuate early and wear protective clothing.",
        },
        { id: "2e", text: "Earthquake Safety: Drop, Cover, and Hold On." },
        {
          id: "2f",
          text: "Tsunami Safety: Move to higher ground and follow official alerts.",
        },
        { id: "2g", text: "Blizzard Safety: Stay indoors and avoid driving." },
      ],
    },
    {
      id: 3,
      title: "Post-Disaster",
      tips: [
        {
          id: "3a",
          text: "Find Medical Help: Seek immediate medical attention for injuries.",
        },
        {
          id: "3b",
          text: "Check-In with Loved Ones: Notify family and friends via text or social media.",
        },
        {
          id: "3c",
          text: "Avoid Dangerous Areas: Stay away from damaged buildings and power lines.",
        },
        {
          id: "3d",
          text: "Ensure Safe Drinking Water: Follow boil water advisories.",
        },
        {
          id: "3e",
          text: "Check for Gas Leaks: Turn off gas if leaks are detected and avoid open flames.",
        },
      ],
    },
  ];

  return (
    <div className="w-full mt-36 bg-white text-black">
      {mainSections.map((section) => (
        <div key={section.id} className="mt-15">
          <h2 className="text-2xl font-bold text-center mb-6">
            {section.title}
          </h2>
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            className="mySwiper w-full max-w-3xl mx-auto pb-10"
          >
            {section.tips.map((tip) => (
              <SwiperSlide
                key={tip.id}
                className="flex justify-center items-center min-h-[150px]"
              >
                <div
                  className="w-full p-6 rounded-2xl shadow-xl transition-transform transform hover:scale-105 duration-300"
                  style={{
                    background: "linear-gradient(to right, #E11D48, #F97316)",
                    color: "white",
                  }}
                >
                  <p className="text-lg text-center font-medium">{tip.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default Guidelines;
