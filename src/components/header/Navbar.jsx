import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { GoSearch } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../../assets/images/logo/car-logo.png";
import { AuthContext } from "../../ContextApi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    try {
      logOut().then(() => {
        toast.success("Your account LogOut !");
      });
    } catch (error) {
      console.log(error);
    }
  };

  let optionsLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/service">Service </NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="container ">
      <div className="navbar bg-base-100 my-7">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {optionsLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img className="w-16" src={logoImg} alt="logo is not supported" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{optionsLinks}</ul>
        </div>
        <div className="navbar-end space-x-5">
          {user && user?.email ? (
            <>
              <button onClick={handleLogOut} className="btn">
                LogOut
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/register" className="btn">
                Register
              </Link>
            </>
          )}

          <span>
            <HiOutlineShoppingBag className="text-2xl" />
          </span>
          <button>
            <GoSearch className="text-2xl" />
          </button>

          <Link
            to=""
            className="btn  btn-outline border-car-primary hover:bg-car-primary hover:border-car-primary  text-car-primary rounded-none"
          >
            Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
