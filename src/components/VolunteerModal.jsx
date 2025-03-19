import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserProvider";

const VolunteerModal = ({ isOpen, onClose }) => {
  const { user } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    availability: "",
    skills: "",
    motivation: "",
  });

  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!user) {
      if (!formData.firstName.trim())
        newErrors.firstName = "First name is required";
      if (!formData.lastName.trim())
        newErrors.lastName = "Last name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Invalid email";
    }
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.availability.trim())
      newErrors.availability = "Availability is required";
    if (!formData.skills.trim())
      newErrors.skills = "Please describe your skills";
    if (!formData.motivation.trim())
      newErrors.motivation = "Motivation is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsModalOpen(true);
      try {
        const name = formData.firstName + " " + formData.lastName;
        const { email } = formData;

        const subject = "Volunteer Application";

        const message = `
        I hope this message finds you well. My name is ${formData.firstName} ${formData.lastName}, and I am interested in volunteering

        I am currently based in ${formData.location} and available ${formData.availability}. I have skills in ${formData.availability}, which I believe could be valuable for this initiative. My main motivation for becoming a volunteer is:

        ${formData.motivation}
        `;

        const response = await fetch("/api/v1/user/send_message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, subject, message }),
          mode: "cors",
          credentials: "include",
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Error trying to login");
        }

        const data = await response.json();
      } catch (error) {
        throw new Error(error);
      }

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        location: "",
        availability: "",
        skills: "",
        motivation: "",
      });

      setTimeout(() => {
        setIsModalOpen(false);
        onClose();
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-9 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-50 rounded-lg p-6 w-full max-w-md">
        {isSuccess ? (
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Thank you for signing up!
            </h2>
            <p className="text-gray-600">
              We will contact you soon with more details.
            </p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Volunteer Signup
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              {user ? (
                <div className="mb-6 bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <p className="text-xl font-bold text-gray-800">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-gray-600 text-sm">{user.email}</p>
                </div>
              ) : (
                <>
                  <div className="flex gap-5">
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-medium mb-1"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md ${
                          errors.firstName
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-medium mb-1"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md ${
                          errors.lastName ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </>
              )}

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-1"
                  htmlFor="location"
                >
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Your location"
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.cvv ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-1"
                  htmlFor="availability"
                >
                  Availability
                </label>
                <input
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  placeholder="Availability (e.g., weekends)"
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.cvv ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-1"
                  htmlFor="skills"
                >
                  Skills
                </label>
                <input
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="Skills or experience"
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.cvv ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-1"
                  htmlFor="motivation"
                >
                  Motivation
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  placeholder="Why do you want to volunteer?"
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.cvv ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#161128] text-white py-2 px-4 rounded-md font-medium transition-colors duration-300 disabled:bg-blue-400 cursor-pointer"
              >
                Submit
              </button>
            </form>
          </>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-9 bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
              <h3 className="text-xl font-semibold">Thank You!</h3>
              <p className="text-gray-600 mt-2">
                We will get back to you shortly.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VolunteerModal;
