import { Outlet } from "react-router-dom";

// if we have to call the ProfileComponent directly without going with the route /about/profile then use this directly
// import ProfileComponent from "./ProfileComponent";

const About = () => {
  return (
    <>
      <h2>About Us Page</h2>
      <p>This is the Section for About Us page.</p>
      {/* In this way ProfileComponent loads whenever the route is
      localhost:1234/about/profile */}
      <Outlet />
      {/* In this way ProfileComponent loads everytime whenever the route is localhost:1234/about
      <ProfileComponent/> */}
    </>
  );
};
export default About;
