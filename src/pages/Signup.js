import React from "react";
import Template from "../components/Template";

const Signup = ({setisLoggedin}) => {
  return (
    <div>
      {" "}
      <Template
        title="Welcome Back"
        desc1="Build Skills"
        desc2="Education"
        image=""
        formtype="signup"
        setisLoggedin={setisLoggedin}
      />
    </div>
  );
};

export default Signup;
