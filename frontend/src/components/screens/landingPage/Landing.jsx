import React from "react";
import Header from "../../common/Header/Header";
import Features from "./Features";
import Hero from "./Hero";
import Footer from "../../common/Footer/Footer";
import Categories from "../Catagories/Categories";
import MerchantPromo from "./MerchantPromo";

import MonthlySubscription from "./Monthly";
import PricingCard from "../Subscription/PricingCard";
import PricingPage from "../Subscription/PricingPage";

const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <MerchantPromo />
      <PricingPage />
      <Features />
      <MonthlySubscription />
      <Footer />
    </>
  );
};

export default Landing;
