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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
