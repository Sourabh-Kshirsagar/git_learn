import { useEffect } from "react";

const ProfileComponentFunctional = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Set Interval Called");
    }, 1000);

    console.log("useEffect called");
    return () => {
      clearInterval(timer);
      console.log("Use Effect return called");
    };
  });
  return (
    <>
      <h5>Functional - Profile Component </h5>
      <p>{props.name}</p>
    </>
  );
};
export default ProfileComponentFunctional;
