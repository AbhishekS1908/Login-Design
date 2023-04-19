import React from "react";
import SignInPage from "../../components/LoginPage/Signup";

const Login = () => {
  return (
    <div>
      <div className="grid grid-cols-2 w-screen">
        <div className="bg-[#000000] h-screen w-4/5 flex justify-center items-center">
          <p className="text-white font-bold text-6xl">Board.</p>
        </div>
        <div className="font-Montserrat w-full">
          <SignInPage />
        </div>
      </div>
    </div>
  );
};

export default Login;
