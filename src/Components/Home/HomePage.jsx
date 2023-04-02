import React from "react";
import { Navbar, HeroSection, Payment, EarnSection, Footer } from "./index.js";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Payment />
      <EarnSection />
      <Footer />
    </div>
  );
};

export default HomePage;
