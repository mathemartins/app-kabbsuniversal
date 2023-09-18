import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import SideBar from "./Components/Containers/SideBar";
import DashboardHome from "./Components/Dashboard/DashboardHome";
import Test from "./Components/test/Test";
import ForRiders from "./Components/ForRiders/ForRiders";
import ForDrivers from "./Components/ForDrivers/ForDrvers"
import Products from "./Components/Products/products";
import Contacts from "./Components/Contact/contact";
import AboutUs from "./Components/AboutUs/aboutUs";
import FAQ from "./Components/FAQ/faq";

export default function App(props) {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/for-drivers" element={<ForDrivers />} />
          <Route path="/for-riders" element={<ForRiders />} />
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Route>

        <Route path="/dashboard" element={<SideBar />}>
          <Route index element={<DashboardHome />} />
        </Route>
      </Routes>
    </div>
  );
}
