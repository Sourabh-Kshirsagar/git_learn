import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const loggedinUserr = () => {
  //Authentication API called Here
  return false;
};

const HeaderComponent = () => {
  const [isLoggedIn, setisLoggedIn] = useState("true");
  //Here we create a state variable to change the default value at runtime
  // const [Title, setTitle] = useState("this is the title");
  // console.log("It is Randers whole Component");
  return (
    <>
      {/* <h1>{Title}</h1> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img
              className="logo-width"
              src="https://intelliatechcom33628.zapwp.com/q:u/r:0/wp:1/w:1/u:https://intelliatech.com/wp-content/uploads/2023/07/logo-scaled.jpg"
            ></img>
          </a>
          {/* on click of this button value will chagne from  this is the title to New app */}
          {/* when we click on the button it trigger the setTitle function and set title will update the value of the local variable as it is a state variable */}
          {/* <button onClick={() => setTitle("New app")}>Click</button> */}
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
        {isLoggedIn ? (
          <button
            className="btn btn-primary"
            onClick={() => setisLoggedIn(false)}
          >
            LogIn
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => setisLoggedIn(true)}
          >
            LogOut
          </button>
        )}
      </nav>
    </>
  );
};

export default HeaderComponent;
