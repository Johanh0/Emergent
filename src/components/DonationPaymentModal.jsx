import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserProvider";

const DonationPaymentModal = ({ isOpen, onClose }) => {
  const { user } = useContext(UserContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    amount: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  // Update form data when user context changes
  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        name: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
        email: user.email || "",
      }));
    }
  }, [user]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const donationOptions = [10, 25, 50, 100];

  const validateForm = () => {
    const newErrors = {};
    if (!user) {
      if (!formData.firstName.trim()) {
        newErrors.name = "First name is required";
      }

      if (!formData.lastName.trim()) {
        newErrors.name = "Last name is required";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Invalid email";
      }
    }

    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      newErrors.amount = "Enter a valid amount";
    }

    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required";
    } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) {
      newErrors.cardNumber = "Invalid card number";
    }

    if (!formData.expiryDate.trim()) {
      newErrors.expiryDate = "Expiry date is required";
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = "Invalid format (MM/YY)";
    }

    if (!formData.cvv.trim()) {
      newErrors.cvv = "CVV is required";
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = "Invalid CVV";
    }

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

  const handleAmountSelect = (amount) => {
    setFormData({
      ...formData,
      amount: amount.toString(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      const donationData = {
        id: user ? user.id : null,
        firstName: user ? user.firstName : formData.firstName,
        lastName: user ? user.lastName : formData.lastName,
        email: user ? user.email : formData.email,
        amount: formData.amount,
      };

      console.log("Sending donation data:", donationData);

      try {
        setIsSubmitting(false);
        setIsSuccess(true);
        const response = await fetch(
          "http://localhost:3000/api/v1/user/send_donation",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(donationData),
            mode: "cors",
            credentials: "include",
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Error trying to send donation");
        }

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          amount: "",
          cardNumber: "",
          expiryDate: "",
          cvv: "",
        });

        setTimeout(() => {
          onClose();
        }, 4000);
      } catch (error) {
        throw new Error(error);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-9 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-50 rounded-lg p-6 w-full max-w-md">
        {isSuccess ? (
          <div className="text-center py-8">
            <div className="mb-4 text-green-500">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Thank you for your donation!
            </h2>
            <p className="text-gray-600">Your generosity makes a difference.</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Make a Donation
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {/* User Information */}
              {user ? (
                <div className="mb-6 bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <h3 className="text-sm font-medium text-gray-600 mb-1">
                    Donating as:
                  </h3>
                  <p className="text-xl font-bold text-gray-800">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-gray-600 text-sm mt-1">{user.email}</p>
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

              {/* Donation Amount */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Donation Amount
                </label>
                <div className="flex mb-2 space-x-2">
                  {donationOptions.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      className={`flex-1 py-2 rounded-md text-sm font-medium ${
                        formData.amount === amount.toString()
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  value={formData.amount}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.amount ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Custom amount"
                  min="1"
                />
                {errors.amount && (
                  <p className="text-red-500 text-xs mt-1">{errors.amount}</p>
                )}
              </div>

              {/* Payment Information */}
              <div className="mb-4">
                <h3 className="text-gray-700 text-sm font-medium mb-2">
                  Payment Information
                </h3>
                <div className="mb-2">
                  <label
                    className="block text-gray-700 text-xs mb-1"
                    htmlFor="cardNumber"
                  >
                    Card Number
                  </label>
                  <input
                    id="cardNumber"
                    name="cardNumber"
                    type="text"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md ${
                      errors.cardNumber ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                  />
                  {errors.cardNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.cardNumber}
                    </p>
                  )}
                </div>

                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label
                      className="block text-gray-700 text-xs mb-1"
                      htmlFor="expiryDate"
                    >
                      Expiry Date
                    </label>
                    <input
                      id="expiryDate"
                      name="expiryDate"
                      type="text"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md ${
                        errors.expiryDate ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="MM/YY"
                      maxLength="5"
                    />
                    {errors.expiryDate && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.expiryDate}
                      </p>
                    )}
                  </div>

                  <div className="w-24">
                    <label
                      className="block text-gray-700 text-xs mb-1"
                      htmlFor="cvv"
                    >
                      CVV
                    </label>
                    <input
                      id="cvv"
                      name="cvv"
                      type="text"
                      value={formData.cvv}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md ${
                        errors.cvv ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="123"
                      maxLength="4"
                    />
                    {errors.cvv && (
                      <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 font-medium transition-colors duration-300 disabled:bg-blue-400 cursor-pointer"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-2"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    `Donate $${formData.amount || "0"}`
                  )}
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                Your donation is secure and helps our cause. Thank you for your
                support.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default DonationPaymentModal;
