import React from 'react';
import { 
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import MovieResults from "./MovieResults";
import FavouritesList from "./FavouritesList";

const Router = () => (
  <div className="row">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieResults} />
        <Route path="/fav" component={FavouritesList} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Router;