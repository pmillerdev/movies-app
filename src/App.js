import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Router from "./components/Router";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Jumbotron />
        <div className="container" >
          <Router />      
        </div>
      </div>
    );
  }
}

export default App;
