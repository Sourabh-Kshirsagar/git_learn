import { Outlet } from "react-router-dom";
import ProfileComponentFunctional from "./ProfileComponentFunctional";
import ProfileComponent from "./ProfileComponent";
import React from "react";
// if we have to call the ProfileComponent directly without going with the route /about/profile then use this directly
// import ProfileComponent from "./ProfileComponent";

// const About = () => {
//   return (
//     <>
//       <h2>About Us Page</h2>
//       <p>This is the Section for About Us page.</p>
//       {/* In this way ProfileComponent loads whenever the route is
//       localhost:1234/about/profile */}
//       {/* <Outlet /> */}

//       {/* In this way ProfileComponent loads everytime whenever the route is localhost:1234/about
//       <ProfileComponent/> */}
//       <ProfileComponent name={"Class Comp. Props"} />
//       <ProfileComponentFunctional name={"Fn. Comp. Props"} />
//     </>
//   );
// };
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent - Constructor");
  }
  componentDidMount() {
    console.log("Parent - ComponentDidMount");
  }
  render() {
    console.log("Parent - Render");
    return (
      <>
        <h2>About Us Page</h2>
        <p>This is the Section for About Us page.</p>
        {/* In this way ProfileComponent loads whenever the route is
      localhost:1234/about/profile */}
        {/* <Outlet /> */}

        {/* In this way ProfileComponent loads everytime whenever the route is localhost:1234/about
      <ProfileComponent/> */}
        <ProfileComponent name={"First child"} />
        <ProfileComponent name={"Second Child"} />
        {/* <ProfileComponentFunctional name={"Fn. Comp. Props"} /> */}
      </>
    );
  }
}
export default About;

// IN this way the render and commit phase will called
// Parent Constructor
// Parent render
// First Child constructor
// First Child render
// Second Child constructor
// Second Child render
// DOM UPDATED for children
// first Child componentDidMount
// Second Child componentoid
// Parent componentDidMount
