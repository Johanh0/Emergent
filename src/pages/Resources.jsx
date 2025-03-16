import React, { useState } from "react";
import Guidelines from "../components/Tips"; // Import the Guidelines component

const Resource = () => {
  const [modalContent, setModalContent] = useState(null);

  return (
    <div className="p-6 full-w">
      {/* YouTube Video Section */}
    

      {/* Guidelines Component */}
      <Guidelines />

      {/* MODAL */}
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
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Post Disaster Informational Video Guide</h2>
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
    </div>
  );
};

export default Resource;