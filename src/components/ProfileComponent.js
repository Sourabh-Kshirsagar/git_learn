import React from "react";

// const ProfileComponent = () => {
//   return (
//     <>
//       <h5>Profile Componenet worked Successfully</h5>
//       <p>This component will crated with functional component</p>
//     </>
//   );
// };
// export default ProfileComponent;

class ProfileComponent extends React.Component {
  // In this way we create class based component and extend with class with
  // React.Component to make the class as a component of React

  // The class based component have an important method render to bind the things on UI
  render() {
    //    After calling this method we have return the JSX element this is the only difference in class and
    //     function based component
    return (
      <>
        <h5>This is the Component Render with the Class Based Component</h5>
        <p>Class Based Component </p>
      </>
    );
  }
}

export default ProfileComponent;
