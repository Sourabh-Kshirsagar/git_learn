import React, { Component, Suspense, lazy, useState } from "react";
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
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  // local state variable props drilling example
  const [user, setUser] = useState({
    name: "Satish Kumar",
    Email: "satish.kumar@gmail.com",
  });
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
        element: (
          <BodyComponent
            // props drilling example user
            user={{
              name: "Props Drilling",
              Email: "satish.kumar@gmail.com",
            }}
          />
        ),
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
