import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <img src="Images/ebay.png" alt="" />
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <NavLink
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link active"
                  aria-current="page"
                  href="#">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 search"
                type="search"
                placeholder="Search"
                aria-label="Search"/>
              <button className="btn btn-success text-white" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
