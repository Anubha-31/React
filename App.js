import React from "react";
import ReactDOM from "react-dom/client";

const JsxHeading = () => {
  return (
    <h1 id="heading" className="heading">
      Hello, World!
    </h1>
  );
};

const JsxComponent = () => {
  return (
    <div>
      <JsxHeading />
      <h1 id="heading" className="heading">
        React Component!
      </h1>
    </div>
  );
};

// console.log(jsxHeading);
// console.log(JsXComonent);
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
// reactRoot.render(jsxHeading);
reactRoot.render(<JsxComponent />);
