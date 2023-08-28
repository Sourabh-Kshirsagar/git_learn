import React from "react";
import ReactDOM from "react-dom/client";

/***
 *
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatble with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 *
 *
 *
 * Transitive Dependencies
 */
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

// • Benefits of JSX
// • Behind the Scenes of JSX
// • Babel & parcel role in JSX Components
// Functional Components
// • Composing Components

// Assignment

// • What is JSX?
// • Superpowers of JSX
// • Role of type attribute in script tag? What options can I use there?
// {TitleComponent} VS {<TitleComponent/>} VS {<Title Component></TitleComponent>} in JSX

// Coding Assignment:
// •Create a Nested header Element using React.createElement(h1, h2, h3 inside a div with class "title")
// • Create the same element using JSX
// • Create a functional component of the same with JSX
// O Pass attributes into the tag in JSX
// • Composition of Component(Add a component inside another)

// {TitleComponent) VS (<Title Component/>} VS {<TitleComponent></TitleComponent>} in JSX
// Create a Header Component from scratch using Functional Components with JSX
// • Add a Logo on left
// • Add a search bar in middle
// O Add User icon on right
// • Add CSS to make it look nice
