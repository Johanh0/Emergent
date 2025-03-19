import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideImg1 from "../assets/NDR.jpeg";
import slideImg2 from "../assets/NDR-2.jpeg";
import slideImg3 from "../assets/NDR-3.jpeg";
import slideImg4 from "../assets/NDR-4.jpeg";

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
            src={slideImg2}
            alt="Disaster Relief Volunteers"
            className="w-full h-96 object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src={slideImg4}
            alt="Food & Water Distribution"
            className="w-full h-96 object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src={slideImg3}
            alt="Emergency Shelters"
            className="w-full h-96 object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src={slideImg1}
            alt="Emergency Shelters"
            className="w-full h-96 object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow;
