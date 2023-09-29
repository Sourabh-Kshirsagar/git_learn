import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import "bootstrap/dist/css/bootstrap.css";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import PageDetails from "./components/PageDetails";
import ProfileComponent from "./components/ProfileComponent";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
        // Here we use nested children
        children: [
          {
            // if we wrote /profile then it will consider it like localhost:1234/profile and throw error
            // path: "/profile",

            // in nested routing routing we use something like this
            // path: "/about/profile",  both the way will work
            path: "profile",
            element: <ProfileComponent />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/PageDetails/:SID",
        element: <PageDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
