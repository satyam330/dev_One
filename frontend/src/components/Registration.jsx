import React from "react";
import "../styles/styles.css";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const handleSubmit=()=>{
    navigate('/datapage')
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-80  ">
        <h2 className="text-xl font-semibold text-center mb-4">
        Registration Form
        </h2>
        <label className=" text-gray-700 font-medium mb-1">NAME </label>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          className="w-full p-2 border rounded mb-3 "
          required
        />

        <label className="text-gray-700 font-medium mb-1">EMAIL </label>
        <input
          type="email"
          name="uemail"
          placeholder="Enter Your Email"
          className="w-full p-2 border rounded mb-3"
          required
        />

        <label className="text-gray-700 font-medium mb-1">AGE </label>
        <input
          type="text"
          name="uage"
          placeholder="Enter Your Age"
          className="w-full p-2 border rounded mb-3"
          required
        />

        <div>
          <label className="text-gray-700 font-medium mb-1">CITY</label>
          <input
            type="text"
            name="ucity"
            placeholder="Enter Your Password"
            className="w-full p-2 border rounded mb-3"
            required
          />
        </div>

        <div className="text-center">
          <button className="primaryBtn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
