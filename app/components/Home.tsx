"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Features from "./features/Features";
import CustomerSupport from "./CustomerSupport/CustomerSupport";
import Price from "./price/Price";
import SupportTeam from "./SupportTeam/SupportTeam";
import Company from "./company/Company";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div>
      <Hero />
      <Features />
      <CustomerSupport />
      <Price />
      <SupportTeam />
      <Company />
    </div>
  );
};

export default Home;
