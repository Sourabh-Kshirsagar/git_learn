import { Outlet } from "react-router-dom";
import ProfileComponentFunctional from "./ProfileComponentFunctional";
import ProfileComponent from "./ProfileComponent";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <>
        <UserContext>{({ user }) => <h3>{user.name}</h3>}</UserContext>

        <h2>About Us Page</h2>
        <p>This is the Section for About Us page.</p>
        <ProfileComponent name={"First child"} />
      </>
    );
  }
}
export default About;
