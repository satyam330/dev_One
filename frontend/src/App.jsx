import React from "react";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import MoreInfo from './components/MoreInfo';
import EditUser from "./components/EditUser";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/user-details"  element={<UserDetails />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/more-info/:id" element={<MoreInfo />} />
          {/* <Route path="/edit-user/:id" element={<Update />} /> */}
        </Routes>
      </Router>
    </>
  );
};
export default App