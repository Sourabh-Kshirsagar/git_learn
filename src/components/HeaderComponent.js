import "bootstrap/dist/css/bootstrap.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

// we have to import the useContext to use the userContext ↑
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const loggedinUserr = () => {
  //Authentication API called Here
  return false;
};

const HeaderComponent = () => {
  // Here we bind the useContext with the UserContext to get the data from UserContext
  const { user } = useContext(UserContext);

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
            {/* Use the userContext data */}
            <p>{user.name}</p>
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
