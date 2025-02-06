// EditUser.js
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const EditUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user; // Get user data from state

  const [updatedUser, setUpdatedUser] = useState(user || {}); // Local state to manage updates
  const [isEditing, setIsEditing] = useState(true); // Track if editing is enabled

  useEffect(() => {
    setUpdatedUser(user || {});
  }, [user]);

  const handleUpdate = async () => {
    console.log("Updating user with data:", updatedUser)
    try {
      const response = await axios.put(`http://localhost:5000/api/users/${user.id}`, updatedUser);
      if (response.status === 200) {
        alert("User updated successfully!");
        navigate("/more-info"); // Redirect to user details page
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700">No user data available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Navbar />
      <div className="max-w-3xl mx-auto bg-white p-16 mt-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Edit User Information
        </h2>

        <div className="space-y-4">
          <div>
            <label className="font-medium">Name:</label>
            <input
              type="text"
              name="name"
              value={updatedUser.name || ""}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="font-medium">Age:</label>
            <input
              type="text"
              name="age"
              value={updatedUser.age || ""}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="font-medium">Contact:</label>
            <input
              type="text"
              name="contactNumber"
              value={updatedUser.contactNumber || ""}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="font-medium">Email:</label>
            <input
              type="text"
              name="email"
              value={updatedUser.email || ""}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="font-medium">City:</label>
            <input
              type="text"
              name="city"
              value={updatedUser.city || ""}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="font-medium">Address:</label>
            <input
              type="text"
              name="address"
              value={updatedUser.address || ""}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
            onClick={handleUpdate} // Submit changes to the server
          >
            Submit Changes
          </button>
        </div>

        <div className="mt-6 text-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => navigate("/MoreInfo", { state: { user } })} // Navigate back to MoreInfo page
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
