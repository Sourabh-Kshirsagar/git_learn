const ProfileComponentFunctional = (props) => {
  return (
    <>
      <h5>Functional - Profile Component </h5>
      {/* In this way we get the props from function calling in the Fn based component */}
      <p>{props.name}</p>
    </>
  );
};
export default ProfileComponentFunctional;
