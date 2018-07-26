import React, { Component } from 'react';
import MovieResults from "./MovieResults";
import FavouritesList from "./FavouritesList";

import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
          <Router>
            <Switch>
              <Route exact path="/" component={MovieResults} />
              <Route path="/fav" component={FavouritesList} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
