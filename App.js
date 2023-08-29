import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

/***
 *
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatble with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 *
 *
 *
 * Transitive Dependencies
 */
// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key: "h1",
//   },
//   "This is heading one"
// );

// const heading1 = React.createElement(
//   "h2",
//   {
//     id: "title",
//     key: "h2",
//   },
//   "This is heading Two"
// );

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//     key: "div",
//   },
//   [heading, heading1]
// );

//functional components

// multiple ways to write functional components

// const HeadingReact2 = () => (
//   <div>
//     <HeadingReact />
//     {heading}
//     <HeadingReact1 />
//     <h1>This is second way to write functional component ...</h1>
//     <h1>This is second way to write functional component ...</h1>
//     <h1>This is second way to write functional component ... </h1>
//   </div>
// );

const title = React.createElement("h1", {}, "This is our title");

const HeaderComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">
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
        <div className="collapse navbar-collapse right-side-nav" id="navbarNav">
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
    </nav>
  );
};

//inline styling in react
// const styleObj = {
//   color: "red",
// };

// const styling = {
//   color: "orange",
// };

// const Head = () => {
//   return (
//     <div>
//       <h1 style={styleObj}>One Line with style</h1>
//       <h1
//         style={{
//           color: "orange",
//         }}
//       >
//         Other without style
//       </h1>
//     </div>
//   );
// };

const restro = {
  image:
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
  name: "Restaurant Name",
  text: "some location some location some location some location ",
  rating: "3.6",
};

const RestourantCards = () => {
  return (
    //React Fragmane <>  use for to use more than one parent  </>
    <>
      <div className="container mt-5">
        <div className="card">
          <img src={restro.image} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{restro.name}</h5>
            <p className="card-text">{restro.text}</p>
            <p className="card-text">{restro.rating} Stars</p>
          </div>
        </div>
      </div>
    </>
  );
};

const BodyComponent = () => {
  return (
    <>
      <div className="display-setting container">
        <RestourantCards />
        <RestourantCards />
        <RestourantCards />
      </div>
    </>
  );
};

const FooterComponent = () => {
  return <div classNam="container-fluid">Footer</div>;
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
