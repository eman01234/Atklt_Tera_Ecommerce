import React from "react";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import ProductList from "./ProductList";

import Categories from "../Catagories/Categories";
const product = () => {
  return (
    <div>
      <Header />

      <Categories />
      <ProductList />

      <Footer />
    </div>
  );
};

export default product;
