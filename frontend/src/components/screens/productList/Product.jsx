import React from "react";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import ProductList from "./ProductList";
import Header2 from "../../common/Header/Header2";

const product = () => {
  return (
    <div>
      <Header />
      <Header2 />

      <ProductList />
      <Footer />
    </div>
  );
};

export default product;
