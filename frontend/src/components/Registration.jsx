import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import { signInForm } from "../constants/formItem";
import { baseUrl } from "../../environment/api.js";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("Submitting form data:", formData);
  
    try {
      const response = await axios.post(`${baseUrl}/register`, formData);

      console.log("Registration successful:", response.data);

      navigate("/user-details", { state: { userData: formData } });

    } catch (error) {
      if (error.response) {
        console.error("Registration failed:", error.response.data);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg w-[28rem]">
        <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-100 mb-6">
          Registration Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {signInForm.map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label className="block text-gray-600 dark:text-gray-300 font-medium">{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full p-3 border rounded-lg mt-1 focus:ring focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
          ))}
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
