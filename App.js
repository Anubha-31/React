const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React!"
);

console.log(heading);
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(heading);
