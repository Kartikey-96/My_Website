import React from "react";
import "../Style/Navbar.css";
import img from "../Assist/logo-Navbar.jpg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const navbarStyle = isHome
    ? { position: "fixed" }
    : { position: "static", backgroundColor: "black" };
  return (
    <div className="navbar" style={navbarStyle}>
      <div className="firstFase">
        <img src={img} className="logo" />
      </div>
      <div className="secondFase">
        <span class="input-group-text btn btn btn-warning" id="basic-addon3">
          <Link to="/">Home</Link>
        </span>
        <span class="input-group-text btn  btn btn-warning" id="basic-addon3">
          <Link to="/product">Product</Link>
        </span>
        <span class="input-group-text btn  btn btn-warning" id="basic-addon3">
          <Link to="/login">Login</Link>
        </span>

        <span class="input-group-text btn  btn btn-warning  " id="basic-addon3">
          <Link to="/contact"> Conatct-us</Link>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
