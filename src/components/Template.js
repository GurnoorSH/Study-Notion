import React from "react";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

const Template = ({ title, desc1, desc2, image, formtype, setisloggedin }) => {
  return (
    <div>
      <div>
        <h1> {title} </h1>
        <p>
          <span> {desc1}</span>
          <span> {desc2}</span>
        </p>
        {formtype === "signup" ? Signup : Login}

        <div>
          <div> </div>
          <p> or </p>
          <div></div>
        </div>

        <button> SignUp with Google </button>
      </div>

      <div>
     
        <img src="" alt="pat" width={558} height={584} loading="lazy">
  
        </img>
        <img src="" alt="pat" width={558} height={490} loading="lazy">
          
        </img>
      </div>
    </div>
  );
};

export default Template;
