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

  // In Fn component we have useState for stateVariable in class based component we have
  // constructor for this and the constructor will always take a props like this

  //In constructor we initialize anything
  //When the class is rendered then first constructor will call
  constructor(props) {
    super(props);
    this.state = {
      count: "This is the count Variable",

      // In this way we create more than one state variable in CBC
      name: "akshay",
      lastname: "sainy",
    };
    console.log("constructor called");
    //crete state variable Here as this is called initially
  }
  // componentDidMount is the method which is on the place of useEffect
  // this is as similar as useEffect to call the API
  componentDidMount() {
    // best place to make an API call
    console.log("ComponentDid Mount will called");
  }
  // The class based component have an important method render to bind the things on UI
  render() {
    console.log("Render called");
    //    After calling this method we have return the JSX element this is the only difference in class and
    //     function based component
    // IN this way we destructure the count or the state variable
    const { count } = this.state;
    return (
      <>
        <h5>Class Based - Profile Component </h5>
        {/* In this way we get the props from function calling in the class based component */}
        <p>{this.props.name}</p>
        <p>{this.state.count}</p>
        <p>{this.state.name}</p>
        <p>{this.state.lastname}</p>
        {/* In this way we use the destructured variable */}
        {/* <p>{count}</p> */}
        <button
          onClick={() => {
            //in this way we set the value of state variable at runtime this.setState()
            this.setState({
              // in this way we change the value of both the state variable
              count: "this is the updated state of count",
              lastname: "K.",
            });
          }}
        >
          click to change
        </button>
      </>
    );
  }
}

export default ProfileComponent;
