import { Button, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logoImage from "../asseets/images/logo.jpg";
import "../asseets/styles/header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUser] = React.useState({});

  const [token, setToken] = React.useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUser(JSON.parse(localStorage.getItem("userInfo")));
  }, [setToken, setUser]);
  const hadleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setToken("");
    setUser({});
    navigate("/");
  };
  const matchesMobile = useMediaQuery("(max-width:768px)");
  return (
    <div className="header">
      <div
        style={{
          width: matchesMobile ? "30%" : "60%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <img
            style={{
              width: "80px",
            }}
            src={logoImage}
            alt=""
          />
        </Link>
        <p className="popular">Popular Release</p>
      </div>
      <div className="link-div">
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {token ? (
            <Typography className="FullName">{user.fullname}</Typography>
          ) : (
            ""
          )}
          {token && (
            <Link
              to="/profile"
              style={{
                p: 0,
                color: "green",
                textDecoration: "none",
                textTransform: "Capitalize",
                marginLeft: "10px",
              }}
            >
              <Typography className="FullName">Add Sneakers</Typography>
            </Link>
          )}
        </div>
        {!token ? (
          <div className="link-div">
            <Link to="/join-us" className="link">
              Join us
            </Link>
            <p>|</p>
            <Link to="/sign-in" className="link">
              Sign in
            </Link>
          </div>
        ) : (
          <Button
            onClick={hadleLogout}
            sx={{
              p: 0,
              textTransform: "Capitalize",
            }}
          >
            logout
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
