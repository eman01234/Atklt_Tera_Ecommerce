import React from "react";
import Header from "../../common/Header/Header";
import Features from "./Features";
import Hero from "./Hero";
import Footer from "../../common/Footer/Footer";
import Header2 from "../../common/Header/Header2";
import MerchantPromo from "./MerchantPromo";
import Footer2 from "../../common/Footer/Footer2";
import MonthlySubscription from "./Monthly";
const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
      <Header2 />
      <MerchantPromo />
      <Features />
      <MonthlySubscription />
      <Footer2 />
      <Footer />
    </>
  );
};

export default Landing;
