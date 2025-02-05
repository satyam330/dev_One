import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams(); // Get user ID from URL
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", age:"",contact:"", email: "", city: "", address: "" });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/users/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/users/${Userid}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        alert("User updated successfully!");
        navigate("/UserDetails"); // Redirect back to UserDetails
      } else {
        console.error("Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
   <div className="bg-white p-6 rounded-lg w-[28rem]">
        <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-100 mb-6">
          Update User
        </h2>
    {/* <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center"> */}
      {/* <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Update User</h2> */}
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Name"
            required
          />
          
          <input
            type="text"
            name="age"
            value={user.age}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Age"
            required
          />
          <input
            type="text"
            name="contactNumber"
            value={user.contactNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Contact Number"
            required
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="city"
            value={user.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="City"
            required
          />
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Address"
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Update User
          </button>
          <button
            type="button"
            className="w-full bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
