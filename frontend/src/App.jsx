import React from "react";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataPage from "./components/Datapage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/datapage" element={<DataPage />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;