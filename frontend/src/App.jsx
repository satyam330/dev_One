import React from "react";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import MoreInfo from './components/MoreInfo';
import Update from "./components/Update";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/UserDetails" element={<UserDetails />} />
          <Route path="/Update/:id" element={<Update />} />
          <Route path="/MoreInfo" element={<MoreInfo />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;