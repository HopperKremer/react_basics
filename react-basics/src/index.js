//Built-in Modules
//1. React Functionalities which deal with http modules, React based functionalities
import React from "react";

//2. ReactDOM is <p><p> -> JSX Element -> JavascriptXML
import ReactDOM from "react-dom";

//Additional file
import App from "./App";

ReactDOM.render(
  <App />, //JSX tag 1st param
  document.getElementById("root") //2nd param
);
