import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!/^[A-Za-z]{2,}$/.test(formData.firstName)) {
      newErrors.firstName = "First name must be at least 2 letters";
    }
    if (!/^[A-Za-z]{2,}$/.test(formData.lastName)) {
      newErrors.lastName = "Last name must be at least 2 letters";
    }
    if (!/^.{2,}@/.test(formData.email)) {
      newErrors.email = "Email must have at least 2 characters before @";
    }
    if (formData.subject.length < 5) {
      newErrors.subject = "Subject must be at least 5 characters long";
    }
    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsModalOpen(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-700 p-6">
        <motion.div
          className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl flex flex-col items-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center text-black mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-center mb-8">
            We'd love to hear from you! Fill out the form below and we'll get
            back to you as soon as possible.
          </p>
          <form className="space-y-6 w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="flex gap-5">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-1/2 p-4 border rounded-md text-lg bg-gray-100"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-1/2 p-4 border rounded-md text-lg bg-gray-100"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-4 border rounded-md text-lg bg-gray-100"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-4 border rounded-md text-lg bg-gray-100"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your message here..."
              className="w-full p-4 border rounded-md h-40 text-lg bg-gray-100"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <motion.button
              type="submit"
              className="w-full bg-black text-white p-4 rounded-md text-lg hover:bg-indigo-800 transition"
              whileHover={{ scale: 1.05 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
