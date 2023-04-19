import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/LoginPage/Login";
import DashboardPage from "./components/SecondPage/DashboardPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
