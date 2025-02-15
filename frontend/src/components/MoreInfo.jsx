import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import { baseUrl } from "../../environment/api";

const MoreInfo = () => {
  const { id } = useParams(); // Get the user ID from the URL
  console.log('id',id)
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Fetch user data using the user ID
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${baseUrl}/user/${id}`);
        console.log("User ID received:", id);
        console.log("API Response:", response.data); 
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700">No user data available.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-600 to-blue-300 p-4">
    <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-xl rounded-lg w-[32rem] p-8">
    <h2 className="text-3xl font-bold text-center text-gray-500 mb-6">
    📜 More Information
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
            className="px-4 py-2 bg-blue-500 text-white rounded-md transition-transform hover:scale-105 hover:bg-blue-600"
            onClick={() => navigate("/user-details")}
          >
            Go Back
          </button>

          <button
            //className="px-4 py-2 bg-green-500 text-white rounded-md  transition-transform hover:scale-105 hover:bg-green-600"
            className="flex items-center bg-green-500 text-white px-4 py-3 rounded-lg font-semibold shadow-md transition-transform hover:scale-105 hover:bg-green-600"
            
            onClick={() => navigate(`/edit-user/${id}`)} // Navigate with user ID in URL
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
