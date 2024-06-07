import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { Route , Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import DashBoard from "./pages/DashBoard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useState } from "react";

function App() {
  const [isLoggedin, setisLoggedin] = useState(false)
  return (
    <div className="w-screen h-screen bg-black flex flex-col  " >
      <Navbar isLoggedin={isLoggedin} setisLoggedin={setisLoggedin} />

      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login setisLoggedin={setisLoggedin}/>}></Route>
        <Route path="/signup" element={<Signup setisLoggedin={setisLoggedin} />}></Route>
        <Route path="/dashboard" element={<DashBoard/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
