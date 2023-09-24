import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import "bootstrap/dist/css/bootstrap.css";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//we also import routerprovider this is used to resnder the UI accourding to the given congifuration path by createBrowserRouter
// we have an Outlet as a named import with this outlet we change the UI according to us it take the data from the children element of the createBrowserRouter and render that on UI
import About from "./components/About";
// we import createBrowserRouter for the routing in our application for this we install a package named react-router-dom
import Error from "./components/Error";
import Contact from "./components/Contact";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      Here we use Outlet compoent of react-router-dom with this we can render
      the children component of the createBrowserRouter
      <FooterComponent />
    </>
  );
};

const appRoute = createBrowserRouter([
  // Here are the multiple paths are defined for the application routing
  // we have to give the path to it and each path is an object here

  {
    path: "/",
    // This is the path given to the createBrowserRouter
    element: <AppLayout />,
    //This is the component load when the above  path is detected
    errorElement: <Error />,
    //This is the Error given when the above path is not detected
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Here to render the UI according to config we have routerProvider form React-dom with this we render the UI according to
// Config file The routerprovider takes the appRouter and Update the UI
root.render(<RouterProvider router={appRoute} />);
