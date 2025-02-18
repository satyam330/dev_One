import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../environment/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${baseUrl}/users`);
        toast("Processing your registration... ⏳", { type: "info", autoClose: 2000 });

        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  

  const handleMoreInfo = (id) => {
    navigate(`/more-info/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseUrl}/user/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      console.log("User deleted successfully:", id);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen text-white">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-700 to-blue-200 p-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-xl rounded-lg w-[36rem] p-8">
        <h2 className="text-2xl font-bold text-center text-gray-500 mb-0">🚀 User List</h2>
        <table className="w-full border-separate border-spacing-y-3">
          <thead>
          <tr className="text-gray-700 bg-pink-300">
          <th className="p-4 text-left rounded-l-lg">👤 Name</th>
            <th className="p-4 text-center rounded-r-lg">⚡ Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="text-center bg-gray-100 rounded-lg shadow-md">
                <td className="p-3 text-gray-800">{user.name}</td>
                <td className="p-3 flex justify-center space-x-4">
                  <button
                    className="bg-gradient-to-r  bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transform transition-transform hover:scale-105"
                    onClick={() => handleMoreInfo(user._id)}
                  >
                    More Info
                  </button>
                  <button
                    className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-2 rounded-lg shadow-md transform transition-transform hover:scale-105"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 text-center">
          <button
            className="bg-gradient-to-r from-gray-500 to-gray-700 text-white px-4 py-3 rounded-lg font-semibold shadow-md transform transition-transform hover:scale-105"
            onClick={handleBack}
          >
            Back to Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
