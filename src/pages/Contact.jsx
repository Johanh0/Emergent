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
  const [showCheck, setShowCheck] = useState(false);

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
      setShowCheck(true);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      setTimeout(() => setShowCheck(false), 2000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 relative">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <p className="text-gray-600 text-center mb-8">We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex space-x-6">
            <div className="w-1/2">
              <input type="text" name="firstName" placeholder="First Name" className="w-full p-4 border rounded-lg" value={formData.firstName} onChange={handleChange} />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div className="w-1/2">
              <input type="text" name="lastName" placeholder="Last Name" className="w-full p-4 border rounded-lg" value={formData.lastName} onChange={handleChange} />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>
          <input type="email" name="email" placeholder="Email" className="w-full p-4 border rounded-lg" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          <input type="tel" name="phone" placeholder="Phone Number (Optional)" className="w-full p-4 border rounded-lg" value={formData.phone} onChange={handleChange} />
          <textarea name="message" placeholder="Your message here..." className="w-full p-4 border rounded-lg h-40" value={formData.message} onChange={handleChange}></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          <button type="submit" className="w-full bg-blue-800 text-white p-4 rounded-lg hover:bg-blue-900">Send Message</button>
        </form>
      </div>
      {showCheck && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl opacity-100 transition-opacity duration-2000">✅</div>
      )}
    </div>
  );
}

