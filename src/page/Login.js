import { Email, Phone } from "@mui/icons-material";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

function Login() {
  const [Active, setActive] = useState("login");

  const LoginWith = [
    {
      url: "https://facebook.com",
    },
    {
      url: "https://instagram.com",
    },
    {
      url: "https://pinterest.com",
    },
    {
      url: "https://linkedin.com",
    }
  ];

  const handleChange = (e) => {
    if (Active == "login") setActive(() => "signUp");
    else setActive(() => "login");
  };

  return (
    <div className="pl-[50px] pr-[50px]">
      <div className="pt-[60px]">
        <h1 className="text-center text-2xl font-Roboto font-bold">Login</h1>
        <div className="flex-col">
          <p className="pt-[20px] pl-[5px] pr-[5px] text-center text-[16px] font-Tajawal">
            By signing in you are agreeing
          </p>

          <p className="pt-[5px] pl-[5px] pr-[5px] text-center text-[13px] font-Roboto">
            our{" "}
            <span className="text-[#0386D0] cursor-pointer text-[15px]">Terms And Policy</span>
          </p>
        </div>

        <div className="pt-[30px] pl-[70px] pr-[70px] flex justify-between">
          <button
            className={`${
              Active == "login"
                ? "text-green-500 border-b-2 border-green-600"
                : ""
            }`}
            onClick={handleChange}
          >
            Login
          </button>
          <button
            className={`${
              Active == "signUp"
                ? "text-green-500 border-b-2 border-green-600"
                : ""
            }`}
            onClick={handleChange}
          >
            Register
          </button>
        </div>
      </div>
      <div className="pt-[15px]">
        <div className="border-b-2 border-slate-200 flex items-center pt-[40px]">
          <Email className="text-slate-300 mr-4" />
          <input
            type="text"
            className="w-full "
            placeholder="Email Address"
          ></input>
        </div>
        <div className="border-b-2 border-slate-200 flex items-center pt-[40px]">
          <Phone className="text-slate-300 mr-4" />
          <input
            type="text"
            className="w-full"
            placeholder="Passsword"
          ></input>
        </div>
      </div>

      <div className="flex pt-[30px] justify-between">
        <div className="flex items-center">
          <input type="checkbox"></input>
          <p className="text-[13px] pl-1">Remember password</p>
        </div>

        <div>
          <p className="text-[13px] cursor-pointer text-[#0386D0]">Forgot Password</p>
        </div>
      </div>

      <div className="pt-[20px]">
      <button className="bg-[#0386D0] cursor-pointer h-[40px] text-center w-full rounded-md text-white font-Roboto">Login</button>
      </div>

      <p className="text-center pt-[20px] font-semibold">Or connect with</p>
      <div className="pt-[20px] flex justify-between">
        {LoginWith.map((e, i) => {
          return <SocialIcon key={i} url={e.url}/>
        })}
      </div>
    </div>
  );
}

export default Login;
