import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const MoreInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user; // Extract user data

  console.log("Received user data:", user); // Debugging line

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
        <div className="text-lg">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Age:</strong> {user.age}
          </p>
          <p>
            <strong>Contact:</strong> {user.contactNumber}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>City:</strong> {user.city}
          </p>
          <p>
            <strong>Address:</strong> {user.address}
          </p>
        </div>
        <div className="mt-6 text-center flex justify-center space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>

          {/* Update button */}
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
            onClick={() => navigate(`/update/${user.id}`)} // Adjust the route to your update page
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
