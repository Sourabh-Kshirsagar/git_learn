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
      userInfo1: {
        count: "This is the count Variable",

        // In this way we create more than one state variable in CBC
        name1: "akshay",
        lastname: "sainy",
      },
      userInfo: {
        // In this way we create more than one state variable in CBC
        name: "akshay",
        location: "Dummy Location",
      },
    };
    console.log("Child - Constructor called" + this.props.name);
    //crete state variable Here as this is called initially
  }
  // componentDidMount is the method which is on the place of useEffect
  // this is as similar as useEffect to call the API
  async componentDidMount() {
    // if we have anything to call in CDM then we have to clear it in componentwillUnmount in this way component will unmount will work
    this.timer = setInterval(() => {
      console.log("SetInterval Called");
    }, 1000);
    // best place to make an API call because this will call after render method
    console.log("Child - ComponentDid Mount will called" + this.props.name);
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("CompoentDidUpdate Called");
  }
  componentWillUnmount() {
    // to get read off of setInterval we have to unmount the setInterval which is done in component will unmount
    console.log("Component will unmount called");
    clearInterval(this.timer);
  }
  // The class based component have an important method render to bind the things on UI
  render() {
    console.log("Child - Render called" + this.props.name);
    //    After calling this method we have return the JSX element this is the only difference in class and
    //     function based component
    // IN this way we destructure the count or the state variable
    // const { count } = this.state;
    return (
      <>
        <h5>Class Based - Profile Component </h5>
        {/* In this way we get the props from function calling in the class based component */}
        <p>{this.props.name}</p>
        {/* in this way we call the state variable which are coming form the top */}
        <p>{this.state.userInfo1.count}</p>
        <p>{this.state.userInfo1.name}</p>
        <p>{this.state.userInfo1.lastname}</p>
        {/* In this way we use the destructured variable */}
        {/* <p>{count}</p> */}
        <button
          onClick={() => {
            //in this way we set the value of state variable at runtime this.setState()
            this.setState({
              // in this way we change the value of both the state variable
              userInfo1: {
                count: "this is the updated state of count",
                lastname: "K.",
              },
            });
          }}
        >
          click to change
        </button>
        {/* <p>{this.state.userInfo.count}</p> */}
        {/* in this way we get the data form the api responce */}
        <h2>Data is Coming from API</h2>
        <p>Name - {this.state.userInfo.name}</p>
        <p>
          Image of User - <img src={this.state.userInfo.avatar_url} />
        </p>
      </>
    );
  }
}

export default ProfileComponent;
