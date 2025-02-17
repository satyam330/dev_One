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
    password: "", // ✅ Ensure this is included
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);
    

    try {
      const response = await axios.post("http://localhost:5000/api/register", formData);
      console.log("Registration successful:", response.data);

      // Navigate to the UserDetails page after successful registration
      navigate("/user-details", { state: { successMessage: "🎉 Registration Successful!" } });

     // navigate("/user-details");
    } catch (error) {
      console.error("Registration failed:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Status:", error.response.status);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-600 to-blue-300 p-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-xl rounded-lg w-[32rem] p-8">
      <h2 className="text-2xl font-bold text-center text-gray-500 mb-6">
      🚀 Register Now
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <table className="w-full border-separate border-spacing-y-4">
            <tbody>
              {signInForm.map(({ label, name, type, placeholder }) => (
                <tr key={name}>
                  <td>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="w-full p-3 border-none rounded-lg bg-gray-100 focus:ring-4 focus:ring-indigo-300 transition-all outline-none"
                      required
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-indigo-600 text-white px-4 py-3 rounded-lg font-semibold shadow-md transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              Register 🚀
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;

