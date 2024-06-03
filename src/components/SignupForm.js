import React from "react";

const SignupForm = () => {

    const [formData, setformData] = useState({firstName:"",lastName:"" , email :"" , password:"" , confirmPassword :""})
    function changeHandler(event) {
        setformData((prevData) => ({
          ...prevData,
          [event.target.name]: event.target.value,
        }));
      }
  return (
    <div>
      {/* tab */}
      <div>
        <button> Student </button>
        <button> Instructor </button>
      </div>
      <form> 
        <label> 
            <p> First Name </p>  <sup> *</sup>
            <input 
            required
            type="text"
            name="firstName"
            onChange={changeHandler}
            placeholder="Enter First Name"
            value={formData.firstName}/>
        </label>

        <label> 
            <p> Last Name </p>  <sup> *</sup> 
            <input 
            required
            type="text"
            name="lastName"
            onChange={changeHandler}
            placeholder="Enter Last Name"
            value={formData.lastName}/>
        </label>

        <label> 
            <p> First Name </p>  <sup> *</sup>
            <input 
            required
            type="text"
            name="firstName"
            onChange={changeHandler}
            placeholder="Enter First Name"
            value={formData.firstName}/>
        </label>
      </form>
    </div>
  );
};

export default SignupForm;
