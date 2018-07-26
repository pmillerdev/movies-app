import React, { Component } from 'react';
import MovieResults from "./MovieResults";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron text-center">
            <h1 className="display-4">Movies App</h1>
            <p className="lead">Who doesn't love movies?</p>
          </div>
        </div>
        <div className="row">
          <MovieResults />
        </div>
      </div>
    );
  }
}

export default App;
