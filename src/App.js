import React from "react";
import ReactDOM from "react-dom";
import Widgets from "./containers/Widgets";

const App = () => {
  return (
    <Widgets />
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));