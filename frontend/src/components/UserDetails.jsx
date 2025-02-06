import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import MoreInfo from "./MoreInfo";
import axios from "axios";

const UserDetails = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  // Fetch User Data from API using Axios
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!id) {
      console.error("Invalid ID provided. Cannot delete.");
      return; // Don't proceed if the ID is invalid
    }

    console.log("Deleting user with id:", id); // Debugging log
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/users/${id}`
      );
      if (response.status === 200) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      } else {
        throw new Error("Failed to delete the user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Navbar isUserDetails={true} />
      <div className="max-w-3xl mx-auto bg-white p-16 mt-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          User Details
        </h2>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3 text-left">Name</th>
              <th className="border p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border">
                <td className="border p-3">{user.name}</td>
                <td className="border p-3 text-center space-x-2">
                  <button
                    className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                    onClick={() => {
                      console.log("User object:", user); // Check if this is the right data
                      navigate("/more-info", { state: { user } });
                    }}
                  >
                    More Info
                  </button>
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetails;
