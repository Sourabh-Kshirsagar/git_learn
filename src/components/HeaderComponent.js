import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const loggedinUserr = () => {
  //Authentication API called Here
  return false;
};

const HeaderComponent = () => {
  const isOnline = useOnline();
  const [isLoggedIn, setisLoggedIn] = useState("false");
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              className="logo-width"
              src="https://intelliatechcom33628.zapwp.com/q:u/r:0/wp:1/w:1/u:https://intelliatech.com/wp-content/uploads/2023/07/logo-scaled.jpg"
            ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse right-side-nav"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/instamart">
                  Instamart
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <h3>{isOnline ? "✅" : "🔴"}</h3>
        {isLoggedIn ? (
          <button
            className="btn btn-primary"
            onClick={() => setisLoggedIn(false)}
          >
            Login
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => setisLoggedIn(true)}
          >
            Logout
          </button>
        )}
      </nav>
    </>
  );
};

export default HeaderComponent;
