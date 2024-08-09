import React from "react";
import Template from "../components/Template";
import images from "../assets/images.jpeg"

const Signup = ({setisLoggedin}) => {
  return (
    <div className="">
      {" "}
      <Template
        title="Welcome Back"
        desc1="Build Skills"
        desc2="Education"
        image={images}
        formtype="signup"
        setisLoggedin={setisLoggedin}
      />
    </div>
  );
};

export default Signup;
