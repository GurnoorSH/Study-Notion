import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const LoginForm = ({setisLoggedin}) => {
  const [formData, setformData] = useState({ email: "", password: "" });
  const [showPass, setshowPass] = useState(false);
  function changeHandler(event) {
    setformData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  const navigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault()
    console.log("adfaf")
    setisLoggedin(true);
    toast.success("Logged In")
    navigate("/dashboard")
  }
  return (
    <div>
      <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
        <label className="w-full">
          <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]" >
            Emai Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            onChange={changeHandler}
            placeholder="Enter Email ID"
            value={formData.email}
            name="email"
            className="w-full text-white bg-slate-600 rounded-[0.5rem] p-[12px]"
          ></input>
        </label>

        <label className="w-full relative">

          <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
            Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type={showPass ? "text" : "password"}
            onChange={changeHandler}
            placeholder="Enter Password"
            value={formData.password}
            name="password"
             className="w-full text-white bg-slate-600 rounded-[0.5rem] p-[12px]"
          ></input>
          <span className='absolute right-3 top-[38px] cursor-pointer'onClick={() => setshowPass((prev) => !prev)}>
            {" "}
            {!showPass ? <AiOutlineEye fontSize={24} fill="#AFB2BF"/> : <AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF" />}
          </span>

          <Link to="/">
            {" "}
            <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto "> Forgot Password</p>
          </Link>
        </label>

        <button className="bg-yellow-300 rounded-[8px] font-medium text-slate-800 px-[12px] py-[8px] mt-7"> Sign In </button>
      </form>
    </div>
  );
};

export default LoginForm;
