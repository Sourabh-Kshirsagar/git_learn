import "bootstrap/dist/css/bootstrap.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

// we have to import the useContext to use the userContext ↑
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

// To connect the redux with react we have useSelector
import { useSelector } from "react-redux";

const loggedinUserr = () => {
  //Authentication API called Here
  return false;
};

const HeaderComponent = () => {
  const { user } = useContext(UserContext);
  // Here we use useSelector The job of this is to give access to our Redux Store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
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
              {/* Here we use the cartItems to get the length of the items which are in redux store */}

              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart - {cartItems.length} Items
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
