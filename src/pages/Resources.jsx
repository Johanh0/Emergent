import React, { useState } from "react";
import Guidelines from "../components/Tips"; // Ensure correct import

const Resource = () => {
  const [modalContent, setModalContent] = useState(null);

  return (
    <div className=" full-w">
      {/* Page Title */}
      <section className="py-20 text-center bg-[linear-gradient(to_right,#161128,#E11D48,#F97316,#161128)] text-white">
        <h1 className="text-5xl font-bold">Emergency Safety Tips</h1>
        <p className="mt-8 text-lg max-w-3xl mx-auto">
          Stay informed and prepared with our comprehensive emergency safety
          tips. Planning ahead, facing a disaster, or recovering afterward,
          these essential guidelines will help you stay safe and protect your
          loved ones.
        </p>
      </section>

      {/* Modal Section */}
      {modalContent && (
        <div className="w-full bg-white p-6 rounded-lg shadow-lg mt-2">
          <p>{modalContent}</p>
          <button
            className="w-full mt-4 bg-black text-white px-4 py-2 rounded-lg cursor-pointer"
            onClick={() => setModalContent(null)}
          >
            Close
          </button>
        </div>
      )}

      {/* YouTube Video Section */}
      <div className="mt-8 mb-8 mr-20 ml-20">
        <h1 className="text-3xl  font-semibold mt-25 mb-4 text-center">
          Watch this Post Disaster Guide!
        </h1>
        <div className="w-full aspect-w-16 aspect-h-9">
          <iframe
            width="100%"
            height="715"
            src="https://www.youtube.com/embed/iEznxKeRXHY?si=62QR4nSMcVNWalyR"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {/* Guidelines Swiper Component */}
        <Guidelines />
      </div>
      {/* Call to Action */}
      <section className="py-16 -mb-20 bg-[#161128] text-white text-center ">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">More Resources</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Learn more about emergency preparedness and response from the
            Occupational Safety and Health Administration.{" "}
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a
              href="https://www.osha.gov/emergency-preparedness"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 bg-white text-red-600 font-bold rounded-md shadow-lg hover:bg-red-100 transition-all">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resource;
