import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link to="/" className="bg-none">
          Home
        </Link>
      </li>

      <li>
        <Link to="/appointment" className="bg-none">
          Get Appointment
        </Link>
      </li>

      <li>
        <a>Our Team</a>
      </li>
      <li>
        <a>Contact us</a>
      </li>
      <li>
        <button className="btn-primary text-white px-9">Login</button>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-secondary py-6 lg:px-16">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img style={{ width: "120px" }} src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        {/* <div className="">
          <a className="btn">Get started</a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
