import React from "react";
import { Link, NavLink } from "react-router-dom";
import bogo from "../assets/bogo.png";
import toast from "react-hot-toast";
import {  useNavigate } from "react-router-dom";


const Navbar = ({ setisLoggedin, isLoggedin }) => {
  const navigate = useNavigate();

  return (
    <div className="  flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <NavLink to="/">
        <img src={bogo} alt="ll"className="rounded-full transform transition-transform duration-300 hover:scale-110" width={100} height={22} loading="lazy" />
      </NavLink>

      <nav className="flex  ">
        <ul className="flex gap-x-6 text-white">
          <Link to="/">
            {" "}
            <li> Home</li>{" "}
          </Link>
          <NavLink to="/about">
            {" "}
            <li>About </li>{" "}
          </NavLink>
          <NavLink to="/contact">
            {" "}
            <li> Contact</li>{" "}
          </NavLink>
          <NavLink>
            {" "}
            <li> </li>{" "}
          </NavLink>
        </ul>
      </nav>

      <div className="flex gap-4 mr-2 ml-6 items-center text-white">
        {!isLoggedin && (
          <NavLink to="/login">
            {" "}
            <button className="bg-slate-800 text-white py-[8px] px-[12px] rounded-[8px] border-slate-900 "> LogIn </button>
          </NavLink>
        )}
        {!isLoggedin && (
          <NavLink to="/signup">
            {" "}
            <button className="bg-slate-800 text-white py-[8px] px-[12px] rounded-[8px] border-slate-900 "> Sign Up </button>
          </NavLink>
        )}
        {isLoggedin && (
          <NavLink to="/home">
            {" "}
            <button className="bg-slate-800 text-white py-[8px] px-[12px] rounded-[8px] border-slate-900 "
              onClick={() => {
                setisLoggedin(false);
                toast.success("Logged Out");
                navigate("/home")
              }}
            >
              {" "}
              LogOut{" "}
            </button>
          </NavLink>
        )}
        {isLoggedin && (
          <NavLink to="/dashboad">
            {" "}
            <button className="bg-slate-800 text-white py-[8px] px-[12px] rounded-[8px] border-slate-900 "> DashBoard </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
