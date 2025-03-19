import { useState } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======

>>>>>>> main
import { FaUtensils } from "react-icons/fa";
import { FaHouseMedical, FaHouse } from "react-icons/fa6";
import {
  FaHandsHelping,
  FaMapMarkedAlt,
  FaExclamationTriangle,
  FaCheck,
} from "react-icons/fa";
import { motion } from "framer-motion";

<<<<<<< HEAD
=======
import Header from "../components/Header";
import Footer from "../components/Footer";
>>>>>>> main
import FeatureCard from "../components/FeatureCard";
import Testimonial from "../components/Testimonial";
import FireEffect from "../components/FireEffect";
import Services from "../components/Services.jsx";
import DonationPaymentModal from "../components/DonationPaymentModal";

import Lottie from "lottie-react";
import helpAnimation from "../assets/help.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slideshow from "../components/Slideshow";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
<<<<<<< HEAD
=======
      <Header />
>>>>>>> main
      <section
        className="pt-16 min-h-screen flex flex-col justify-between
"
      >
        {/* Hero Section */}
<<<<<<< HEAD
        <section
          className="h-fit flex items-center bg-white
        "
        >
          <div className="container mx-auto px-4 lg:my-20 ">
            <div className="grid md:grid-cols-2 gap-12 items-center text-center lg:text-start">
=======
        <section className="h-[600px] flex items-center bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
>>>>>>> main
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Emergency Aid & Support Network
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Connect with volunteers and access emergency resources in your
                  community. Together we can make a difference.
                </p>
<<<<<<< HEAD
                <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
                  <Link to={"/find-help"}>
                    <button className="px-6 py-3 font-bold border-3 border-orange-600 rounded-lg bg-orange-600 text-white hover:bg-white hover:text-orange-600 transition-all">
                      Get Help Now
                    </button>
                  </Link>
                  <Link to={"/volunteer"}>
                    <button className="px-6 py-3 font-bold rounded-lg bg-white border-3  border-orange-600 text-orange-500 hover:text-white hover:bg-orange-600">
                      Become a Volunteer
                    </button>
                  </Link>
=======
                <div className="flex gap-4">
                  <button className="px-6 py-3 font-bold border-3 border-orange-600 rounded-lg bg-orange-600 text-white hover:bg-white hover:text-orange-600 transition-all">
                    Get Help Now
                  </button>
                  <button className="px-6 py-3 font-bold rounded-lg bg-white border-3  border-orange-600 text-orange-500 hover:text-white hover:bg-orange-600">
                    Become a Volunteer
                  </button>
>>>>>>> main
                  {/* Donate Button */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-3 font-bold rounded-lg bg-red-600 text-white border-3 border-red-600 hover:bg-white hover:text-red-600 transition-all"
                  >
                    Donate
                  </button>
                </div>
              </div>
              {/* Right Side - Slideshow */}
<<<<<<< HEAD
              <div className="flex justify-center">
                <Slideshow />
              </div>
=======
              <Slideshow />
>>>>>>> main
            </div>
          </div>
        </section>

        {/* Application Services */}
        <Services />

        {/* Make a Difference Section */}
<<<<<<< HEAD
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/*Lottie Animation */}
              <div className=" w-full ">
=======
        <section className="py-20 bg-neutral-100">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/*Lottie Animation */}
              <div className="w-full max-w-md">
>>>>>>> main
                <Lottie
                  animationData={helpAnimation}
                  loop={true}
                  autoplay={true}
<<<<<<< HEAD
                  className="w-full md:w-150 h-150"
                />
              </div>
              <div className="text-center lg:text-start">
=======
                  className="w-150 h-150"
                />
              </div>
              <div>
>>>>>>> main
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Make a Difference
                </h2>
                <p className="text-gray-600 mb-8">
                  Join our network of volunteers and help those in need. Share
                  your skills and time to support your community.
                </p>
<<<<<<< HEAD
                <div className="space-y-4 text-gray-900 flex flex-col items-center lg:items-start">
=======
                <div className="space-y-4 text-gray-900">
>>>>>>> main
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-green-600" />
                    <span>Flexible scheduling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-green-600" />
                    <span>Training provided</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-green-600" />
                    <span>Community support</span>
                  </div>
                </div>
<<<<<<< HEAD
                <Link to={"/volunteer"}>
                  <button className="px-6 py-3 my-10 border-3 hover:bg-orange-600 hover:text-white hover:border-orange-600 border-orange-600 text-orange-600 font-bold rounded-lg bg-white text-orange-600 transition-all">
                    Start Volunteering
                  </button>
                </Link>
=======
                <button className="px-6 py-3 my-10 border-3 hover:bg-orange-600 hover:text-white hover:border-orange-600 border-orange-600 text-orange-600 font-bold rounded-lg bg-white text-orange-600 transition-all">
                  Start Volunteering
                </button>
>>>>>>> main
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        <section className="py-20 bg-gray-50">
=======
        <section className="py-20 bg-white">
>>>>>>> main
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-center font-bold text-gray-900 mb-12">
              Emergency Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<FaHouseMedical />}
                title="Medical Assistance"
                description="Locate hospitals to access care from medical professionals and emergency responders."
              />
              <FeatureCard
                icon={<FaUtensils />}
                title="Food & Supplies"
                description="Access emergency food, water, and essential supplies."
              />
              <FeatureCard
                icon={<FaHouse />}
                title="Shelter"
                description="Find temporary housing and shelter services."
              />
            </div>
          </div>
        </section>
        {/* Ready to Make an Impact CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="py-20 text-center bg-[linear-gradient(to_right,#161128,#E11D48,#F97316,#161128)] text-white"
        >
          <h3 className="text-4xl font-extrabold">Ready to Make an Impact?</h3>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">
            Join our community of volunteers and help create positive change in
            your area.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
<<<<<<< HEAD
            <Link to={"/volunteer"}>
              <button className="px-6 py-3 bg-white text-blue-900 font-bold rounded-md shadow-lg hover:bg-opacity-80 transition-all">
                Get Started
              </button>
            </Link>
            <Link to={"/about"}>
              <button className="px-6 py-3 border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-blue-900 transition-all">
                Learn More
              </button>
            </Link>
          </div>
        </motion.section>
        {/* Impact Stories Section */}
        <section className="py-10 -mb-20 bg-[#161128]">
=======
            <button className="px-6 py-3 bg-white text-blue-900 font-bold rounded-md shadow-lg hover:bg-opacity-80 transition-all">
              Get Started
            </button>
            <button className="px-6 py-3 border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-blue-900 transition-all">
              Learn More
            </button>
          </div>
        </motion.section>
        {/* Impact Stories Section */}
        <section className="py-10">
>>>>>>> main
          <div className="container mx-auto px-6">
            <div className="grid pt-20 md:grid-cols-3 gap-8">
              <Testimonial
                avatar="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                text="The platform helped me find immediate assistance during a crisis. Forever grateful for the volunteers."
                name="Sarah M."
              />
              <Testimonial
                avatar="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                text="Volunteering here has been incredibly rewarding. I've met amazing people and made a real difference."
                name="John D."
              />
              <Testimonial
                avatar="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                text="The resources and training provided helped me become a better emergency responder."
                name="Maria R. "
              />
            </div>
<<<<<<< HEAD
            <h2 className="text-3xl text-center text-white  mt-20 mb-0">
=======
            <h2 className="text-3xl text-center mt-20 mb-0">
>>>>>>> main
              Take It From Them{" "}
            </h2>
          </div>
        </section>
        <DonationPaymentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </section>
    </>
  );
};

export default Home;
