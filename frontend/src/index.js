import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Landing from "./components/screens/landingPage/Landing";
import Auth from "./components/screens/auth/Auth";
import Product from "./components/screens/productList/Product";
import Vegitables from "./components/screens/Catagories/Vegitables";
import Fruits from "./components/screens/Catagories/Fruits";
import Spices from "./components/screens/Catagories/Spices";
import CartItems from "./components/screens/cart/CartItems";
import Aboutus from "./components/screens/aboutus/Aboutus";
import ProductDetail from "./components/screens/productDetail/ProductDetail";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/signUp" element={<Auth />} />
      <Route path="/product" element={<Product />} />
      <Route path="/Vegitables" element={<Vegitables />} />
      <Route path="/Fruits" element={<Fruits />} />
      <Route path="/Spices" element={<Spices />} />
      <Route path="/CartItems" element={<CartItems />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/ProductDetail" element={<ProductDetail />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
