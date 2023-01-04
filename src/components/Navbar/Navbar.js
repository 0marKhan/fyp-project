import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <div className="nav">
        <ul>
          <li>
            <HashLink className="link-class" smooth to="/#start">
              Home
            </HashLink>
          </li>
          <li>
            <Link className="link-class" to="/add-product">
              Add Product
            </Link>
          </li>
          <li>
            <Link className="link-class" to="/product-status">
              Product Status
            </Link>
          </li>
          <li>
            <Link className="link-class" to="/ship-product">
              Ship Product
            </Link>
          </li>
          <li>
            <Link className="link-class" to="/recieve-report">
              Recieve Report
            </Link>
          </li>
          <li>
            <Link className="link-class" to="/login">
              Login
            </Link>
          </li>
          <li>
            <HashLink className="link-class" smooth to={"/#sign-up"}>
              Sign up
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
