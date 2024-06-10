import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
import rat from "../assets/rat.png";

const Template = ({ title, desc1, desc2, image, formtype, setisLoggedin }) => {
  return (
    <div className="flex justify-between w-11/12 max-w-[1160 px] px-12 mx-auto gap-x-12  ">
      <div className="w-11/12 max-w-[450px] ">
        <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375 rem]">
          {" "}
          {title}{" "}
        </h1>
        <p className=" mt-4 text-[1.125 rem] leading-[1.625rem] ">
          <span className="text-slate-200"> {desc1}</span>
          <span className="text-blue-100 italic"> {desc2}</span>
        </p>
        {formtype === "signup" ? (
          <SignupForm setisLoggedin={setisLoggedin} />
        ) : (
          <LoginForm setisLoggedin={setisLoggedin} />
        )}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className=" w-full h-[1px] bg-slate-600"> </div>
          <p className="text-slate-300 font-medium leading-[1.375rem]"> or </p>
          <div className=" w-full h-[1px] bg-slate-600"></div>
        </div>

        <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-slate-100 border border-slate-700 py-[8px] gap-x-2 mt-6 ">
          {" "}
          <FcGoogle /> <p> SignUp with Google </p>{" "}
        </button>
      </div>

      <div className=" relative w-11/12 max-w-[450px] pt-10">
        <img src={rat} alt="pat" width={558} height={584} loading="lazy"></img>
        <img
          className="absolute top-4 right-4 "
          src={image}
          alt="pat"
          width={558}
          height={490}
          loading="lazy"
        ></img>
      </div>
    </div>
  );
};

export default Template;
