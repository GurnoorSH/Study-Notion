import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import bogo from '../assets/bogo.png'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Signup from '../pages/Signup'


const Navbar = () => {
  return (
    <div className='  bg-slate-600 flex'> 

        
        <NavLink to ='/'> 
          <img src={bogo} alt='ll' width={160} height={32} loading='lazy'/>
        </NavLink>

        <nav className='flex gap-3'> 
            <ul> 
               <Link to={Home}> <li> Home</li> </Link>
               <NavLink to={About}> <li>About </li> </NavLink>
               <NavLink to={Contact}> <li> Contact</li> </NavLink>
               <NavLink> <li> </li> </NavLink>
            </ul>
        </nav>

        <div> 
            {
                <NavLink to={Login}>  <button>  LogIn </button></NavLink>            }
             {   <NavLink to={Signup}>  <button>  Sign Up </button></NavLink>         }
              {  <NavLink to={Login}>  <button>  LogIn </button></NavLink>            }
               { <NavLink to={Login}>  <button>  LogIn </button></NavLink>            }
        </div>

    </div>
  )
}

export default Navbar