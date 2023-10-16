import { Outlet } from "react-router-dom";
import ProfileComponentFunctional from "./ProfileComponentFunctional";
import ProfileComponent from "./ProfileComponent";
import React from "react";
import UserContext from "../utils/UserContext";
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
  }
  componentDidMount() {}
  render() {
    return (
      <>
        {/* In this way we used the userContext in class based components as a component
      and this component return a funtion with userContext value */}
        <UserContext>{({ user }) => <h3>{user.name}</h3>}</UserContext>

        <h2>About Us Page</h2>
        <p>This is the Section for About Us page.</p>
        <ProfileComponent name={"First child"} />
      </>
    );
  }
}
export default About;
