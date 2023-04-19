import React from "react";

import Google from "../../assets/google-icon 1.png";
import Apple from "../../assets/apple 1.png";

import { useNavigate } from "react-router-dom";

const Signup = () => {
  const Navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 h-screen ml-12">
      <div className="flex items-center justify-center">
        <form className="p-8 -m-10 w-auto bg-white">
          <div className="bg-[#F5F5F5]">
            <h1 className="text-3xl font-bold mb-1 font-Montserrat">Sign In</h1>
            <h2 className="font-medium text-sm mb-6">
              Sign in to your account
            </h2>
            <div className="flex flex-row text-xs mt-7 ml-4 items-center">
              <button className="flex flex-row">
                <img alt="google" src={Google} className="w-3 h-3 mr-2" />
                <p className="mr-10 text-[#858585] text-xs">
                  Sign in with Google
                </p>
              </button>
              <button className="flex flex-row">
                <img alt="google" src={Apple} className="w-3 h-3 mr-2" />
                <p className="mr-10 text-[#858585] text-xs">
                  Sign in with Apple
                </p>
              </button>
            </div>
          </div>

          {/* Sign-in form */}
          <div className="font-OpenSans">
            <div className="mt-11">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-3"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 mb-5 border border-gray-100 bg-[#F5F5F5] rounded-xl focus:outline-none hover:bg-gray-300"
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-3"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 mb-5 border border-gray-100 bg-[#EAEAEA] rounded-xl focus:outline-none hover:bg-gray-300"
                placeholder="••••••••"
              />
              <a
                href="/"
                alt=""
                className="text-[#346BD4] hover:text-blue-400 font-normal text-sm"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#000000] text-white font-bold py-2 mt-5 px-4 rounded-xl hover:bg-[#262525] focus:outline-none"
              onClick={() => {
                Navigate("/Dashboard");
              }}
            >
              Sign In
            </button>
            <p className="text-gray-600 text-center mt-12">
              Don't have an account?{" "}
              <a
                href="/"
                alt=""
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Register here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
