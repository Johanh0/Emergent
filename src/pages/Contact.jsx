import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsModalOpen(true);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 relative mt-24 text-black">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <p className="text-gray-600 text-center mb-8">
          We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex space-x-6">
            <div className="w-1/2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full p-4 border rounded-lg"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full p-4 border rounded-lg"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-4 border rounded-lg"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (Optional)"
            className="w-full p-4 border rounded-lg"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your message here..."
            className="w-full p-4 border rounded-lg h-40"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          <button
            type="submit"
            className="w-full bg-black text-white p-4 rounded-lg hover:bg-gray-800 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-9 bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <h3 className="text-xl font-semibold">Thank You!</h3>
            <p className="text-gray-600 mt-2">We will get back to you shortly.</p>
            <button
              className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
