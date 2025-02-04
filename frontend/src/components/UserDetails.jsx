import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "./Navbar";

const UserDetails = ({ userData }) => {  // Accept userData as a prop
  const navigate = useNavigate();
  return(
    <div>
      <Navbar isUserDetails={true} />
    </div>
  );
};

export default UserDetails;
