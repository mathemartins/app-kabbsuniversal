import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import Register from "./Components/Register/Register";
import SideBar from "./Components/Containers/SideBar";
import DashboardHome from "./Components/Dashboard/DashboardHome";
import Test from "./Components/test/Test";
import ForRiders from "./Components/ForRiders/ForRiders";
import ForDrivers from "./Components/ForDrivers/ForDrvers";

export default function App(props) {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/for-drivers" element={<ForDrivers />} />
          <Route path="/for-riders" element={<ForRiders />} />
          <Route path="/test" element={<Test />} />
        </Route>

        <Route path="/dashboard" element={<SideBar />}>
          <Route index element={<DashboardHome />} />
        </Route>
      </Routes>
    </div>
  );
}
