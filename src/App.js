import React, { Component, Suspense, lazy } from "react";
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
import { Shimmer } from "react-shimmer";
// to make dynamic loading or chunking or dynaminc iimpport we can't impport instamart as like this
// import Instamart from "./components/Instamart";

// instead of above we import instamart as below
// in this way we import the instamart
// Here Lazy is come from react lib to make dynamic import
const Instamart = lazy(() => import("./components/Instamart"));

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
      {
        path: "/instamart",
        element: (
          // any JSX is also put in the fallback
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);

// Theory -
// - When and why do we need lazy()?
// - What is suspense?
// - Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?
// - Advantages and disadvantages of using this code splitting pattern?
// - When do we and why do we need suspense?
