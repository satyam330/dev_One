import React from "react";
import "../styles/styles.css";

const Form = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="bg-white p-6 rounded-lg shadow-md w-80  ">
        <h2 className="text-xl font-semibold text-center mb-4">Form</h2>

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
        <div className="text-center"> 
          <button className="primaryBtn "> Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
