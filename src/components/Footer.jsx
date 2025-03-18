import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-20 text-center lg:text-start">
      <div className="container mx-auto px-4 py-5">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="">
            <h2 className="text-xl font-bold text-gray-900 flex items-center justify-center lg:justify-start gap-2">
              EmergencyAid
            </h2>
            <p className="text-gray-600 mt-2">
              Connecting communities in times of need.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-600">
              <Link to={"/about"}>
                <li>About Us</li>
              </Link>
              <Link to={"/find-help"}>
                <li>Find Help</li>
              </Link>
              <Link to={"/volunteer"}>
                <li>Volunteer</li>
              </Link>
              <Link to={"/resources"}>
                <li>Resources</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>contact@emergencyaid.org</li>
              <li>1-800-HELP-NOW</li>
              <li>123 Aid Street, City</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Follow Us
            </h3>
            <div className="flex justify-center lg:justify-start gap-4 text-gray-600">
              <FaTwitter />
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
