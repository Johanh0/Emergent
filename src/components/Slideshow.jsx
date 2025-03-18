import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slideshow = () => {
  // Slideshow settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 1000, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto-play the slideshow
    autoplaySpeed: 3000, // Change slides every 3 seconds
    arrows: false, // Hide navigation arrows
  };

  return (
    <div className=" w-full max-w-lg overflow-hidden">
      <Slider {...settings}>
        <div>
          <img
            src="src/assets/NDR-2.jpeg"
            alt="Disaster Relief Volunteers"
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="src/assets/NDR-4.jpeg"
            alt="Food & Water Distribution"
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="src/assets/NDR-3.jpeg"
            alt="Emergency Shelters"
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="src/assets/NDR.jpeg"
            alt="Emergency Shelters"
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow;
