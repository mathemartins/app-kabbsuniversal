import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
// import Dashboard from "./Components/Dashboard/Dashboard";
import DashboardHome from "./Components/Dashboard/DashboardHome";

export default function App(props) {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
        </Route>
        <Route path="/dashboard" element={<DashboardHome />} />
      </Routes>
    </div>
  );
}
