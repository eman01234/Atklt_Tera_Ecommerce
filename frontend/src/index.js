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
import Auth from "./components/screens/auth/Login/Auth";
import Product from "./components/screens/productList/Product";
import Vegitables from "./components/screens/Catagories/Vegitables";
import Fruits from "./components/screens/Catagories/Fruits";
import Spices from "./components/screens/Catagories/Spices";
import CartItems from "./components/screens/cart/CartItems";
import Aboutus from "./components/screens/aboutus/Aboutus";
import ProductDetail from "./components/screens/productDetail/ProductDetail";
import Signup_customer from "./components/screens/auth/signup/Signup_customer";
import Forgot from "./components/screens/auth/Forget/Forgot";
import Signup_merchant from "./components/screens/auth/signup/Signup_merchant";
import UserProfile from "./components/screens/auth/user/UserProfile";
import UserSettings from "./components/screens/auth/user/UserSettings";
import Logout from "./components/screens/auth/user/Logout";
import AddProduct from "./components/screens/merchant/AddProduct";
import ChatPage from "./components/screens/chatpage/ChatPage";
import SubscriptionPage from "./components/screens/Subscription/Subscription";
import AboutusPage from "./components/screens/aboutus/AboutusPage";
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
      <Route path="/aboutus" element={<AboutusPage />} />
      <Route path="/ProductDetail" element={<ProductDetail />} />
      <Route path="/Signup_customer" element={<Signup_customer />} />
      <Route path="/Forgot" element={<Forgot />} />
      <Route path="/Signup_merchant" element={<Signup_merchant />} />
      <Route path="/UserProfile" element={<UserProfile />} />
      <Route path="/UserSettings" element={<UserSettings />} />
      <Route path="/Logout" element={<Logout />} />
      <Route path="/AddProduct" element={<AddProduct />} />
      <Route path="/Chat" element={<ChatPage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/Subscription" element={<SubscriptionPage />} />
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
