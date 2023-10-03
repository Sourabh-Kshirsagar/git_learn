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
  constructor(props) {
    super(props);
    this.state = {
      userInfo1: {
        count: "This is the count Variable",
        name1: "akshay",
        lastname: "sainy",
      },
      userInfo: {
        name: "akshay",
        location: "Dummy Location",
      },
    };
    console.log("Child - Constructor called" + this.props.name);
  }
  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("SetInterval Called");
    }, 1000);
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
    console.log("Component will unmount called");
    clearInterval(this.timer);
  }
  render() {
    console.log("Child - Render called" + this.props.name);
    return (
      <>
        <h5>Class Based - Profile Component </h5>
        <p>{this.props.name}</p>
        <p>{this.state.userInfo1.count}</p>
        <p>{this.state.userInfo1.name}</p>
        <p>{this.state.userInfo1.lastname}</p>
        <button
          onClick={() => {
            this.setState({
              userInfo1: {
                count: "this is the updated state of count",
                lastname: "K.",
              },
            });
          }}
        >
          click to change
        </button>
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
