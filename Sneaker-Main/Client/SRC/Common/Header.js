import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../asseets/images/logo.jpg";
import "../asseets/styles/header.css";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        {" "}
        <img
          style={{
            width: "80px",
          }}
          src={logoImage}
          alt=""
        />
      </Link>
      <h2
        style={{
          color: "#544D4D",
        }}
      >
        Popular Release
      </h2>
      <div className="link-div">
        <Link to="/join-us" className="link">
          Join us
        </Link>
        <p>|</p>
        <Link to="/sign-in" className="link">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Header;
