import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "This is heading one"
);

const heading1 = React.createElement(
  "h2",
  {
    id: "title",
    key: "h2",
  },
  "This is heading Two"
);

const container = React.createElement(
  "div",
  {
    id: "container",
    key: "div",
  },
  [heading, heading1]
);

//functional components

// multiple ways to write functional components

const HeadingReact = () => {
  return <h1>This is the Example of functional component</h1>;
};

const HeadingReact1 = () => {
  return (
    <div>
      <HeadingReact />
      {heading}
      <h1>This is second way to write functional component</h1>
      <h1>This is second way to write functional component</h1>
      <h1>This is second way to write functional component</h1>
    </div>
  );
};

const HeadingReact2 = () => (
  <div>
    <HeadingReact />
    {heading}
    <HeadingReact1 />
    <h1>This is second way to write functional component ...</h1>
    <h1>This is second way to write functional component ...</h1>
    <h1>This is second way to write functional component ... </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingReact2 />);
