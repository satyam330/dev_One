import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../environment/api.js";
import { FaArrowLeft, FaSave } from "react-icons/fa"; // Import icons

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    contactNumber: "",
    email: "",
    city: "",
    address: "",
  });

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/user/${id}`);
        const { _id, createdAt, updatedAt, __v, ...filteredData } = response.data;
        setFormData(filteredData);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    if (id) fetchUserData();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${baseUrl}/users/${id}`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      navigate("/user-details", { replace: true });
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-600 to-blue-300 p-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-xl rounded-lg w-[28rem] p-6">
        <h2 className="text-2xl font-bold text-center text-gray-500 mb-2">
          ✏️ Edit User
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <label className="block text-gray-700 font-medium">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <input
                type={key === "age" ? "number" : "text"}
                name={key}
                value={formData[key] || ""}
                onChange={handleChange}
                className="w-full p-3 border-none rounded-lg bg-gray-200 focus:ring-4 focus:ring-indigo-300 transition-all outline-none"
                required
              />
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <button
              type="button"
              className="flex items-center bg-gray-600 text-white px-4 py-3 rounded-lg font-semibold shadow-md transition-transform hover:scale-105 hover:bg-gray-700"
              onClick={() => navigate("/user-details")}
            >
              <FaArrowLeft className="mr-2" /> Go Back
            </button>
            <button
              type="submit"
              className="flex items-center bg-yellow-500 text-white px-4 py-3 rounded-lg font-semibold shadow-md transition-transform hover:scale-105 hover:bg-yellow-600"
            >
              <FaSave className="mr-2" /> Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
