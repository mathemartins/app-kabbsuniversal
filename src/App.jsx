import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero";
import Payment from "./Components/Payment";
import EarnSection from "./Components/EarnSection";
import Footer from "./Components/Footer";

export default function App(props) {
  return (
    <div>
      <Navbar />
      <Hero />
      <Payment />
      <EarnSection />
      <Footer />
    </div>
  );
}
