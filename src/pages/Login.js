import React from "react";
import Template from "../components/Template";
import images from "../assets/abc.jpg"
const Login = ({setisLoggedin}) => {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Build Skills"
        desc2="Education"
        image={images}
        formtype="login"
        setisLoggedin={setisLoggedin}
      />
    </div>
  );
};

export default Login;
