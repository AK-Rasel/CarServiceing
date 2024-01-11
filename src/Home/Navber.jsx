import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.svg"
import shopBag from "../assets/icons/shopBag.svg"
import shaer from "../assets/icons/Shae.svg"

const Navber = () => {
  const allLink = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
  </>
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        {/* dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {allLink}
          </ul>
        </div>
        {/* logo Image Start*/}
        <img className="w-24 ml-4" src={logo} alt="logo" />
        {/* logo Image end*/}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {allLink}
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <img src={shopBag} alt="" />
        <img src={shaer} alt="" />
        <a className="btn">Appointment</a>
      </div>
    </div>
  );
};

export default Navber;
