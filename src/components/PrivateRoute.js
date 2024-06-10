import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
const PrivateRoute = ({isLoggedin , children}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedin) {
          navigate("/login");
        }
      }, [isLoggedin, navigate]);
    
   if (isLoggedin) {
    return children
   }
   

}

export default PrivateRoute