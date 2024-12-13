// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store/Store";
import "./App.css";
import Landing from "./components/screens/landingPage/Landing";
import Auth from "./components/screens/auth/Login/Auth";
import Product from "./components/screens/productList/Product";
import Vegitables from "./components/screens/Catagories/Vegitables";
import Fruits from "./components/screens/Catagories/Fruits";
import Spices from "./components/screens/Catagories/Spices";
import CartItems from "./components/screens/cart/CartItems";
import ProductDetail from "./components/screens/productDetail/ProductDetail";
import Signup_customer from "./components/screens/auth/signup/Signup_customer";
import Forgot from "./components/screens/auth/Forget/Forgot";
import Signup_merchant from "./components/screens/auth/signup/Signup_merchant";
import UserProfile from "./components/screens/auth/user/UserProfile";
import UserSettings from "./components/screens/auth/user/UserSettings";
import Logout from "./components/screens/auth/user/Logout";
import AddProduct from "./components/screens/merchant/AddProduct";
import ChatPage from "./components/common/floatMessage/ChatPage";
import SubscriptionPage from "./components/screens/Subscription/Subscription";
import AboutusPage from "./components/screens/aboutus/AboutusPage";
import Dashboard from "./components/modules/Dashboard/Dashboard";
import OrderDetail from "./components/modules/Dashboard/OrderDetail";
import OrderList from "./components/modules/Dashboard/OrderList";
import DeliveryList from "./components/modules/Dashboard/DeliveryList";
import FloatChat from "./components/common/floatMessage/FloatChat";
import PrivateRoute from "./routes/PrivateRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router>
          <FloatChat />
          <Routes>
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
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <PrivateRoute>
                  <OrderList />
                </PrivateRoute>
              }
            />
            <Route
              path="/order/:id"
              element={
                <PrivateRoute>
                  <OrderDetail />
                </PrivateRoute>
              }
            />
            <Route
              path="/delivery-list"
              element={
                <PrivateRoute>
                  <DeliveryList />
                </PrivateRoute>
              }
            />
            <Route
              path="/Delivery_order/:id"
              element={
                <PrivateRoute>
                  <OrderDetail />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
