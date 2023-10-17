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
import UserContext from "./utils/UserContext";
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  // local state variable props drilling example
  const [user, setUser] = useState({
    name: "Satish Kumar",
    email: "satish.kumar@gmail.com",
  });

  return (
    <>
      {/* If we don't put the HeaderComponent inside usecontext then HeaderComponentwill take the previouus value of the 
    usercontext that is dummy name and dummy email id 

    to get the updated value we put all the things inside userContext
      <HeaderComponent /> */}
      {/* we wrapedup the userContext.provider with header outlet and footer because we want user data everywhere in our app  */}
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
      </UserContext.Provider>
      ;
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
            userPD={{
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

// Theory:
// - What is prop drilling?
// - What is lifting the state up?
// - What is Context Provider and Context Consumer?
// - If you don't pass a value to the provider does it take the default value?
