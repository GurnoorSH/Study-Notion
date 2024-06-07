import React from "react";
import Template from "../components/Template";
const Login = ({setisLoggedin}) => {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Build Skills"
        desc2="Education"
        image=""
        formtype="login"
        setisLoggedin={setisLoggedin}
      />
    </div>
  );
};

export default Login;
