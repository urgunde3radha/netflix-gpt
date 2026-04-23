import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleForms = () => {
    isSignInForm ? setIsSignInForm(false) : setIsSignInForm(true);
  };
  return (
    <div className="relative h-screen">
      <Header />
      <img
        src="/Netflix India – Watch Shows Online, Watch Movies Online_files/IN-en-20260420-TRIFECTA-perspective_52edec47-1b88-414a-bbbe-670f7229d886_large.jpg"
        alt="netflix_login_background"
      />
      <form className="absolute bg-black bg-opacity-80 p-12 w-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <label className="text-white font-bold text-2xl m-4 py-4 rounded-lg">
          {isSignInForm ? "Sign in" : "Sign up"}
        </label>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter full name"
            className="p-2 m-4 text-white w-full bg-gray-800"
          />
        )} 
        <input
          type="text"
          placeholder="Enter email address"
          className="p-2 m-4 text-white w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="Enter passowrd"
          className="p-2 m-4 text-white w-full  bg-gray-800"
        />
        <button className="p-2 m-4 bg-red-700 text-white w-full rounded-md">
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <p className="text-white cursor-pointer m-2 p-2" onClick={toggleForms}>
          {isSignInForm
            ? "New to Netflix? Sign up Now"
            : "Already registered, sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
