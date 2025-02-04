import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    contactNumber: "",
    email: "",
    city: "",
    address: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/UserDetails", { state: { userData: formData } });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white dark:bg-gray-800 dark:text-white p-8 rounded-lg shadow-lg w-full max-w-md transition-all duration-300">
        
        {/* Form Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-100 mb-6">
           Registration Form
        </h2>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Name */}
          <div>
            <label className="block text-gray-600 dark:text-gray-300 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="w-full p-3 border rounded-lg mt-1 focus:ring focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-600 dark:text-gray-300 font-medium">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter Your Age"
              className="w-full p-3 border rounded-lg mt-1 focus:ring focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-gray-600 dark:text-gray-300 font-medium">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter Your Contact Number"
              className="w-full p-3 border rounded-lg mt-1 focus:ring focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 dark:text-gray-300 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="w-full p-3 border rounded-lg mt-1 focus:ring focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-600 dark:text-gray-300 font-medium">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter Your City"
              className="w-full p-3 border rounded-lg mt-1 focus:ring focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-600 dark:text-gray-300 font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Your Address"
              className="w-full p-3 border rounded-lg mt-1 focus:ring focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
