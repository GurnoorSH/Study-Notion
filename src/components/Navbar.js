import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import bogo from '../assets/bogo.png'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import toast from 'react-hot-toast'


const Navbar = ({setisLoggedin , isLoggedin}) => {
  return (
    <div className='  bg-slate-600 flex justify-evenly'> 

        
        <NavLink to ='/'> 
          <img src={bogo} alt='ll' width={160} height={32} loading='lazy'/>
        </NavLink>

        <nav className='flex gap-3'> 
            <ul className='flex gap-3'> 
               <Link to={Home}> <li> Home</li> </Link>
               <NavLink to={About}> <li>About </li> </NavLink>
               <NavLink to={Contact}> <li> Contact</li> </NavLink>
               <NavLink> <li> </li> </NavLink>
            </ul>
        </nav>

        <div className='flex gap-3 mr-2 ml-6'> 
            { !isLoggedin && <NavLink to={Login}>  <button>  LogIn </button></NavLink>            }
             { !isLoggedin &&   <NavLink to={Signup}>  <button>  Sign Up </button></NavLink>         }
              {  isLoggedin && <NavLink to={Login}>  <button onClick={()=> {setisLoggedin(false)
                toast.success("Logged Out")
              }}>  LogOut </button></NavLink>            }
               {isLoggedin &&  <NavLink to={Login}>  <button>  DashBoard </button></NavLink>            }
        </div>

    </div>
  )
}

export default Navbar