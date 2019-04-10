import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

function MyFunc() {
  return <div className="MyFunc">just a stupid test</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
//ReactDOM.render(<MyFunc />, rootElement);
