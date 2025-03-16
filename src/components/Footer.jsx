import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-20">
      <div className="container mx-auto px-4 py-5">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
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
              <li>About Us</li>
              <li>Find Help</li>
              <li>Volunteer</li>
              <li>Resources</li>
              <li>Donate</li>
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
            <div className="flex gap-4 text-gray-600">
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
