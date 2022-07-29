import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartImage from "../../assets/cart.svg";
import logo from "../../assets/logo.png";
import "./index.css";

const NavBar = (props) => {
  const cartValue = 10;

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>
      </div>
      <div className="cart-container">
        <div className="cart-value">{props.cartValue}</div>
        <Link to="/cart">
          <img src={cartImage} className="cart-image" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
