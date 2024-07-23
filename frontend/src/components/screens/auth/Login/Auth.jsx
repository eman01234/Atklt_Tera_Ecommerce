import React, { useEffect, useState } from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import "../../../../App.css";
import { vegi1 } from "../../../../assets/images/Index";
import { Link } from "react-router-dom";
import { ArrowLeft, Truck } from "lucide-react";
const Auth = () => {
  const [isMerchant, setIsMerchant] = useState(true);
  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    const addRightPanelActive = () =>
      container.classList.add("right-panel-active");
    const removeRightPanelActive = () =>
      container.classList.remove("right-panel-active");

    signUpButton.addEventListener("click", addRightPanelActive);
    signInButton.addEventListener("click", removeRightPanelActive);

    return () => {
      signUpButton.removeEventListener("click", addRightPanelActive);
      signInButton.removeEventListener("click", removeRightPanelActive);
    };
  }, []);

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${vegi1})` }}
    >
      <div
        id="container"
        className="container relative bg-white rounded-[10px] shadow-lg overflow-hidden w-[768px] max-w-full min-h-[480px]"
      >
        {isMerchant ? (
          <div className="form-container sign-up-container absolute top-0 left-0 h-full w-1/2 transition-all duration-600 ease-in-out opacity-0 z-1">
            <form className="bg-white flex items-center justify-center flex-col px-12 h-full text-center">
              <h1 className="font-bold m-0 text-3xl">Welcome Merchant</h1>
              <div className="social-container my-5">
                <a
                  href="#"
                  className="social inline-flex justify-center items-center border border-gray-300 rounded-full h-10 w-10 mx-1"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="social inline-flex justify-center items-center border border-gray-300 rounded-full h-10 w-10 mx-1"
                >
                  <FaGooglePlusG />
                </a>
                <a
                  href="#"
                  className="social inline-flex justify-center items-center border border-gray-300 rounded-full h-10 w-10 mx-1"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <span className="text-sm">Sign in and reach your customers</span>

              <input
                className="bg-gray-200 border-none p-3 my-2 w-full"
                type="email"
                placeholder="Email"
              />
              <input
                className="bg-gray-200 border-none p-3 my-2 w-full"
                type="password"
                placeholder="Password"
              />
              <button className="rounded-[20px] border border-amber-400 bg-lime-600 text-white font-bold py-3 px-11 tracking-wider uppercase transition-transform duration-75 transform active:scale-95 focus:outline-none mt-4">
                Sign Up
              </button>
              <p>
                {" "}
                Dont have an account?
                <Link
                  to="/Signup_merchant"
                  className=" text-sm underline my-4  text-sky-600 "
                >
                  Sign up
                </Link>
              </p>
              <Link
                to="/Forgot"
                className=" text-sm no-underline my-4 text-sky-600"
              >
                Forgot your password?
              </Link>
            </form>
          </div>
        ) : (
          <div className="form-container sign-up-container absolute top-0 left-0 h-full w-1/2 transition-all duration-600 ease-in-out opacity-0 z-1">
            <form className="bg-white flex items-center justify-center flex-col px-12 h-full text-center">
              <h1 className="font-bold m-0 text-3xl">
                Welcome Delivery Person
              </h1>
              <div className="social-container my-5">
                <a
                  href="#"
                  className="social inline-flex justify-center items-center border border-gray-300 rounded-full h-10 w-10 mx-1"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="social inline-flex justify-center items-center border border-gray-300 rounded-full h-10 w-10 mx-1"
                >
                  <FaGooglePlusG />
                </a>
                <a
                  href="#"
                  className="social inline-flex justify-center items-center border border-gray-300 rounded-full h-10 w-10 mx-1"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <span className="text-sm">Sign in </span>

              <input
                className="bg-gray-200 border-none p-3 my-2 w-full"
                type="email"
                placeholder="Email"
              />
              <input
                className="bg-gray-200 border-none p-3 my-2 w-full"
                type="password"
                placeholder="Password"
              />
              <button className="rounded-[20px] border border-amber-400 bg-lime-600 text-white font-bold py-3 px-11 tracking-wider uppercase transition-transform duration-75 transform active:scale-95 focus:outline-none mt-4">
                Sign Up
              </button>
              {isMerchant && (
                <p>
                  {" "}
                  Dont have an account?
                  <Link
                    to="/Signup_merchant"
                    className=" text-sm underline my-4  text-sky-600 "
                  >
                    Sign up
                  </Link>
                </p>
              )}
              <Link
                to="/Forgot"
                className=" text-sm no-underline my-4 text-sky-600"
              >
                Forgot your password?
              </Link>
            </form>
          </div>
        )}
        {/* Customer Login */}
        <div className="form-container sign-in-container absolute top-0 left-0 h-full w-1/2 transition-all duration-600 ease-in-out z-2">
          <form className="bg-white flex items-center justify-center flex-col px-12 h-full text-center">
            <h1 className="font-bold m-0 text-4xl">Sign in</h1>
            <div className="social-container my-5">
              <a
                href="#"
                className="social inline-flex justify-center items-center border border-gray-300 rounded-full h-10 w-10 mx-1"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="social inline-flex justify-center items-center border border-gray-300 rounded-full h-10 w-10 mx-1"
              >
                <FaGooglePlusG />
              </a>
              <a
                href="#"
                className="social inline-flex justify-center items-center border border-gray-300 rounded-full h-10 w-10 mx-1"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <span className="text-base">Wellcome Back!</span>
            <input
              className="bg-gray-200 border-none p-3 my-2 w-full"
              type="email"
              placeholder="Email"
            />
            <input
              className="bg-gray-200 border-none p-3 my-2 w-full"
              type="password"
              placeholder="Password"
            />

            <button className="rounded-[20px] border border-amber-400 bg-lime-600 text-white font-bold py-3 px-11 tracking-wider uppercase transition-transform duration-75 transform active:scale-95 focus:outline-none mt-4">
              Sign In
            </button>
            <p>
              {" "}
              Dont have an account?
              <Link
                to="/Signup_customer"
                className=" text-sm underline my-4  text-sky-600 "
              >
                Sign up
              </Link>
            </p>
            <Link
              to="/Forgot"
              className=" text-sm no-underline my-4 text-sky-600"
            >
              Forgot your password?
            </Link>
          </form>
        </div>
        {/* Go back to customer page */}
        <div className="overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ease-in-out z-[100]">
          <div className="overlay bg-gradient-to-r from-primary to-lime-400 bg-no-repeat bg-cover bg-center text-white relative left-[-100%] h-full w-[200%] transition-transform duration-600 ease-in-out">
            <div className="overlay-panel overlay-left absolute flex items-center justify-start flex-col  py-10  px-10 text-center top-0 h-full w-1/2 transition-transform duration-600 ease-in-out translate-x-[-20%]">
              <h1 className="font-bold m-0 text-2xl flex" id="signIn">
                {<ArrowLeft size={36} strokeWidth={2.75} />}Go to customer login
              </h1>

              {/* Delivery */}
              <div className=" mt-14 flex items-center flex-col">
                <Truck size={80} strokeWidth={2.75} />
                <p className=" text-lg font-semibold"> Delivery personal </p>
                <button
                  onClick={() => {
                    setIsMerchant(!isMerchant);
                  }}
                  className=" text-sm ghost rounded-[20px] border border-white bg-transparent text-white font-bold my-4 py-2 px-8 "
                >
                  Login
                </button>
              </div>
            </div>
            <div className="overlay-panel overlay-right absolute flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2 transition-transform duration-600 ease-in-out translate-x-0 right-0">
              <h1 className="font-bold m-0 text-4xl">
                Hi, Are you a Merchant?
              </h1>
              <p className="text-sm font-light leading-5 tracking-wide my-5">
                yes?, Reach a wider audience with your fresh and organic
                products. Sign in Your your account!
              </p>
              <button
                id="signUp"
                className="ghost rounded-[20px] border border-white bg-transparent text-white font-bold py-3 px-11 tracking-wider uppercase transition-transform duration-75 transform active:scale-95 focus:outline-none"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;