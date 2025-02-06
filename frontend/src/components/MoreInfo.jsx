// MoreInfo.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const MoreInfo = () => {

  const navigate = useNavigate();

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
          More Information
        </h2>

        <div className="text-lg space-y-4">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Contact:</strong> {user.contactNumber}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>City:</strong> {user.city}</p>
          <p><strong>Address:</strong> {user.address}</p>
        </div>

        <div className="mt-6 text-center flex justify-center space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => navigate("/user-details")}
          >
            Go Back
          </button>

          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            onClick={() => navigate("/edit-user", { state: { user } })} // Pass user data to EditUser page
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
