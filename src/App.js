import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import "bootstrap/dist/css/bootstrap.css";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";

// import {First, Second} from "./components/Header";                      // import named component
// import HeaderComponent from "./components/Header";                     //import default export component
// import HeaderComponent, {First, Second} from "./components/Header";    // IN this way we got default and named export at a time
// import { First, Second } from "./components/Header";                  // in this way we got all the named component at a time.
// import * as XYZ from "./components/Header";                           // in this way we got all the named compoent in single obj.

// const title = React.createElement("h1", {}, "This is our title");

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
