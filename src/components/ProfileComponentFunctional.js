import { useEffect } from "react";

const ProfileComponentFunctional = (props) => {
  useEffect(() => {
    // in this way we have componentwillunmount have with Fn component
    const timer = setInterval(() => {
      console.log("Set Interval Called");
    }, 1000);

    console.log("useEffect called");
    //  and we have return function to clean up the code of use Effect
    return () => {
      clearInterval(timer);
      console.log("Use Effect return called");
    };
  });
  return (
    <>
      <h5>Functional - Profile Component </h5>
      {/* In this way we get the props from function calling in the Fn based component */}
      <p>{props.name}</p>
    </>
  );
};
export default ProfileComponentFunctional;
