import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setformData] = useState({ email: "", password: "" });
  const [showPass, setshowPass] = useState(false);
  function changeHandler(event) {
    setformData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <div>
      <form>
        <label>
          <p>
            Emai Address <sup>*</sup>
          </p>
          <input
            required
            type="email"
            onChange={changeHandler}
            placeholder="Enter Emial ID"
            value={formData.email}
            name="email"
          ></input>
        </label>

        <label>
          <p>
            Password <sup>*</sup>
          </p>
          <input
            required
            type={showPass ? "text" : "password"}
            onChange={changeHandler}
            placeholder="Enter Password"
            value={formData.password}
            name="password"
          ></input>
          <span onClick={() => setshowPass((prev) => !prev)}>
            {" "}
            {!showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>

          <Link to="/">
            {" "}
            <p> Forgot Password</p>
          </Link>
        </label>

        <button> Sign In </button>
      </form>
    </div>
  );
};

export default LoginForm;
