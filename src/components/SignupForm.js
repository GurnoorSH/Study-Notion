import React from "react";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignupForm = ({setisLoggedin}) => {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  function changeHandler(event) {
    setformData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    if (formData.password!== formData.confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
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
      <div>
        <button> Student </button>
        <button> Instructor </button>
      </div>
      <form onSubmit={submitHandler}>
        <div>
          {" "}
          <label>
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]"> First Name </p> <sup className="text-pink-200"> *</sup>
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
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]"> Last Name </p> <sup className="text-pink-200"> *</sup>
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
          <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]"> Email Address </p> <sup className="text-pink-200"> *</sup>
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
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]"> Create  Password </p> <sup className="text-pink-200"> *</sup>
            <input
              required
              type={showPass ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter password"
              value={formData.password}
              className="w-full text-white bg-slate-600 rounded-[0.5rem] p-[12px]"
            />{" "}
            <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setshowPass((prev) => !prev)}>
              {" "}
              {!showPass ? <AiOutlineEye fontSize={24} fill="#AFB2BF" /> : <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>}
            </span>
          </label>{" "}
          <label className="relative">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]"> Confirm Password </p> <sup className="text-pink-200"> *</sup>
            <input
              required
              type={cshowPass ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className="w-full text-white bg-slate-600 rounded-[0.5rem] p-[12px]"
            />{" "}
            <span className='absolute right-3 top-[68px] cursor-pointer'onClick={() => setcshowPass((prev) => !prev)}>
              {" "}
              {!cshowPass ? <AiOutlineEye fontSize={24} fill="#AFB2BF" /> : <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>}
            </span>
          </label>{" "}
        </div>
        <button className="bg-yellow-300 rounded-[8px] font-medium text-slate-800 px-[12px] py-[8px] mt-7"> Create Account </button>
      </form>
    </div>
  );
};

export default SignupForm;
