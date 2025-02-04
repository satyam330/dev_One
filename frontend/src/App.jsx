import React from "react";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/UserDetails" element={<UserDetails />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;