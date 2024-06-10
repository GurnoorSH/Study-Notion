import React from "react";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignupForm = ({ setisLoggedin }) => {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const [accType, setaccType] = useState("student")

  function changeHandler(event) {
    setformData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords Do Not Match");
      return;
    }
    setisLoggedin(true);
    toast.success("Account Created");
    navigate("/dashboard");
  }

  const [showPass, setshowPass] = useState(false);
  const [cshowPass, setcshowPass] = useState(false);
  return (
    <div>
      {/* tab */}
      <div className=" flex bg-slate-800 p-1 my-6 gap-x-1 rounded-full max-w-max">
        <button className={`${accType==="student" ?"text-white bg-slate-900":"bg-transparent text-slate-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=> setaccType("student")}> Student </button>
        <button className={`${accType==="instructor" ?"text-white bg-slate-900":"bg-transparent text-slate-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=> setaccType("instructor")}> Instructor </button>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex gap-x-4">
          {" "}
          <label>
            <p className="text-[0.875rem] text-white mb-1 mt-2 leading-[1.375rem]">
              {" "}
              First Name{" "}<sup className="text-pink-200"> *</sup>
            </p>{" "}
            
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="w-full text-white bg-slate-600 rounded-[0.5rem] p-[12px]"
            />
          </label>
          <label>
            <p className="text-[0.875rem] text-white mb-1 mt-2 leading-[1.375rem]">
              {" "}
              Last Name{" "} <sup className="text-pink-200"> *</sup>
            </p>{" "}
           
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className="w-full text-white bg-slate-600 rounded-[0.5rem] p-[12px]"
            />
          </label>{" "}
        </div>

        <label>
          <p className="text-[0.875rem] text-white mb-1 mt-2 leading-[1.375rem]">
            {" "}
            Email Address{" "} <sup className="text-pink-200"> *</sup>
          </p>{" "}
         
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email"
            value={formData.email}
            className="w-full text-white bg-slate-600 rounded-[0.5rem] p-[12px]"
          />
        </label>

        <div className="flex gap-x-4">
          {" "}
          <label className="relative ">
            <p className="text-[0.875rem] text-white mb-1 mt-2 leading-[1.375rem]">
              {" "}
              Create Password{" "}<sup className="text-pink-200"> *</sup>
            </p>{" "}
            
            <input
              required
              type={showPass ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter password"
              value={formData.password}
              className="w-full text-white bg-slate-600 rounded-[0.5rem] p-[12px]"
            />{" "}
            <span
              className="absolute right-3 top-[45px] cursor-pointer"
              onClick={() => setshowPass((prev) => !prev)}
            >
              {" "}
              {!showPass ? (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>{" "}
          <label className="relative">
            <p className="text-[0.875rem] text-white mb-1 mt-2 leading-[1.375rem]">
              {" "}
              Confirm Password{" "} <sup className="text-pink-200"> *</sup>
            </p>{" "}
           
            <input
              required
              type={cshowPass ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className="w-full text-white bg-slate-600 rounded-[0.5rem] p-[12px]"
            />{" "}
            <span
              className="absolute right-2 top-[45px] cursor-pointer"
              onClick={() => setcshowPass((prev) => !prev)}
            >
              
              {!cshowPass ? (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>{" "}
        </div>
        <button className="bg-yellow-300 rounded-[8px] font-medium w-full text-slate-800 px-[12px] py-[8px] mt-7">
          {" "}
          Create Account{" "}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
