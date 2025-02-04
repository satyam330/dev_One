import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isUserDetails }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-red-100 h-16 flex items-center justify-between px-6 relative">
      {/* Dynamic Title in the Center */}
      <p className="absolute left-1/2 transform -translate-x-1/2 font-bold text-lg">
        {isUserDetails ? "User Details" : "Student Page"}
      </p>

      {/* Back Button on the Right (Only on Datapage) */}
      {isUserDetails && (
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded ml-auto"
        >
          Back
        </button>
      )}
    </div>
  );
};

export default Navbar;
