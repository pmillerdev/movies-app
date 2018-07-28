import React from 'react';
import { 
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import SearchResults from "./SearchResults";
import FavouritesList from "./FavouritesList";

const Router = () => (
  <div className="row">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SearchResults} />
        <Route path="/favourites" component={FavouritesList} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Router;