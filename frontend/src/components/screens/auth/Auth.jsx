import React, { useEffect } from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import "../../../App.css";
import { vegi1 } from "../../../assets/images/Index";

const Auth = () => {
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
        <div className="form-container sign-up-container absolute top-0 left-0 h-full w-1/2 transition-all duration-600 ease-in-out opacity-0 z-1">
          <form className="bg-white flex items-center justify-center flex-col px-12 h-full text-center">
            <h1 className="font-bold m-0 text-4xl">Create Account</h1>
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
            <span className="text-sm">or use your email for registration</span>
            <input
              className="bg-gray-200 border-none p-3 my-2 w-full"
              type="text"
              placeholder="Name"
            />
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
            <button className="rounded-[20px] border border-amber-400 bg-lime-600 text-white font-bold py-3 px-11 tracking-wider uppercase transition-transform duration-75 transform active:scale-95 focus:outline-none">
              Sign Up
            </button>
          </form>
        </div>
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
            <span className="text-sm">or use your account</span>
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
            <a href="#" className="text-[#333] text-sm no-underline my-4">
              Forgot your password?
            </a>
            <button className="rounded-[20px] border border-amber-400 bg-lime-600 text-white font-bold py-3 px-11 tracking-wider uppercase transition-transform duration-75 transform active:scale-95 focus:outline-none">
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ease-in-out z-[100]">
          <div className="overlay bg-gradient-to-r from-primary to-lime-400 bg-no-repeat bg-cover bg-center text-white relative left-[-100%] h-full w-[200%] transition-transform duration-600 ease-in-out">
            <div className="overlay-panel overlay-left absolute flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2 transition-transform duration-600 ease-in-out translate-x-[-20%]">
              <h1 className="font-bold m-0 text-4xl">Welcome Back!</h1>
              <p className="text-sm font-light leading-5 tracking-wide my-5">
                To keep connected with us please login with your personal info
              </p>
              <button
                id="signIn"
                className="ghost rounded-[20px] border border-white bg-transparent text-white font-bold py-3 px-11 tracking-wider uppercase transition-transform duration-75 transform active:scale-95 focus:outline-none"
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right absolute flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2 transition-transform duration-600 ease-in-out translate-x-0 right-0">
              <h1 className="font-bold m-0 text-4xl">
                Hi, Are you a Merchant?
              </h1>
              <p className="text-sm font-light leading-5 tracking-wide my-5">
                yes?, Reach a wider audience with your fresh and organic
                products. Apply now to become a merchant!
              </p>
              <button
                id="signUp"
                className="ghost rounded-[20px] border border-white bg-transparent text-white font-bold py-3 px-11 tracking-wider uppercase transition-transform duration-75 transform active:scale-95 focus:outline-none"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
