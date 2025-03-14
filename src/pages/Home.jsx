import { FaUtensils } from "react-icons/fa";
import { FaHouseMedical, FaHouse } from "react-icons/fa6";
import {
  FaHandsHelping,
  FaMapMarkedAlt,
  FaExclamationTriangle,
  FaCheck,
} from "react-icons/fa";
import { motion } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FeatureCard from "../components/FeatureCard";
import Testimonial from "../components/Testimonial";
import FireEffect from "../components/FireEffect";
import VolunteerOpportunities from "../components/VolunteerCard.jsx";

import Lottie from "lottie-react";
import helpAnimation from "../assets/help.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slideshow from "../components/Slideshow";

const Home = () => {
  return (
    <>
      <Header />
      <main
        className="pt-16 min-h-screen flex flex-col justify-between
"
      >
        {/* Hero Section */}
        <section className="h-[600px] flex items-center bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Emergency Aid & Support Network
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Connect with volunteers and access emergency resources in your
                  community. Together we can make a difference.
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-3 font-bold border-3 border-orange-600 rounded-lg bg-orange-600 text-white hover:bg-white hover:text-orange-600 transition-all">
                    Get Help Now
                  </button>
                  <button className="px-6 py-3 font-bold rounded-lg bg-white border-3  border-orange-600 text-orange-500 hover:text-white hover:bg-orange-600">
                    Become a Volunteer
                  </button>
                </div>
              </div>
              {/* Right Side - Slideshow */}
              <Slideshow />
            </div>
          </div>
        </section>

        {/* Emergency Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-center font-bold text-white-800 mb-12">
              Emergency Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<FaHouseMedical />}
                title="Medical Assistance"
                description="Connect with medical professionals and emergency responders."
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

        {/* Make a Difference Section */}
        <section className="py-20 bg-neutral-100">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 🎥 Lottie Animation replacing Hero Image Placeholder */}
              <div className="w-full max-w-md">
                <Lottie
                  animationData={helpAnimation}
                  loop={true}
                  autoplay={true}
                  className="w-150 h-150"
                />
              </div>
              <div>
                <h2 className="text-3xl text-gray-900 mb-6">
                  Make a Difference
                </h2>
                <p className="text-gray-600 mb-8">
                  Join our network of volunteers and help those in need. Share
                  your skills and time to support your community.
                </p>
                <div className="space-y-4 text-gray-900">
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
                <button className="px-6 py-3 border-3 hover:bg-orange-600 hover:text-white hover:border-orange-600 border-orange-600 text-orange-600 font-bold rounded-md bg-white text-orange-600 transition-all">
                  Start Volunteering
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Volunteer Opportunities Section */}
        <VolunteerOpportunities />

        {/* Ready to Make an Impact CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="py-20 text-center bg-[linear-gradient(to_right,#111827,#E11D48,#F97316,#111827)] text-white"
        >
          <h3 className="text-4xl font-extrabold">Ready to Make an Impact?</h3>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">
            Join our community of volunteers and help create positive change in
            your area.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
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
          <div className="container mx-auto px-6">
            <div className="grid pt-20 md:grid-cols-3 gap-8">
              <Testimonial
                avatar="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=123"
                text="The platform helped me find immediate assistance during a crisis. Forever grateful for the volunteers."
                name="Sarah M."
              />
              <Testimonial
                avatar="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=456"
                text="Volunteering here has been incredibly rewarding. I've met amazing people and made a real difference."
                name="John D."
              />
              <Testimonial
                avatar="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=789"
                text="The resources and training provided helped me become a better emergency responder."
                name="Maria R. "
              />
            </div>
            <h2 className="text-3xl text-center mt-20 mb-0">
              Take It From Them{" "}
            </h2>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
