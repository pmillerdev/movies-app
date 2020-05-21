import React from "react";
import Jumbotron from "./components/Jumbotron";
import Router from "./components/Router";

const App = () => (
  <div className="container-fluid">
    <Jumbotron />
    <div className="container">
      <Router />
    </div>
  </div>
);

export default App;
