// import logo from "../../assets/Tripwbg.png"
import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/Link.png"
import { useContext } from "react"
import { Authcontext } from "../../Provider/Authprovider"
import Swal from "sweetalert2"
import { ProfileDropdown } from "./ProfileDropdown"
import { Toggle } from "../Toggle/Toggle"

export const Navbar = () => {
  const {user,signOutUser}=useContext(Authcontext)





  
 
    const menu=<>
    <li><NavLink to={"/"}>Home</NavLink></li>
    {
       user && <li><NavLink to={"/packagedetails"}>Package Details</NavLink></li>
    }
    
    <li><NavLink to={"/community"}>Community</NavLink></li>
    <li><NavLink to={"/alltrips"}>All Trips</NavLink></li>
    <li><NavLink to={"/about"}>About us</NavLink></li>
   
   {
    !user && 
<>
<li><NavLink to={"/register"}>Register</NavLink></li>

</>




   }
   
    </>
  return (
    <div className="">
        <div className="navbar fixed z-10  bg-gray-400/90">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu space-y-2 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52  p-2 shadow ">
       {menu}
      </ul>
    </div>
    <div className=" flex justify-center items-center ">
        <img className=" " src={logo} alt="" />
       
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-1">
    {menu}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user?


      <>
<Toggle></Toggle>
<ProfileDropdown></ProfileDropdown>
      {/* .............. */}
    
      </>
    :
    <Link to={'login'} className="btn">Login</Link>
    }
  </div>
</div>
    </div>
  )
}
