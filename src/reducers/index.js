import movies from "./movies";
import favourites from "./favourites";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  movies,
  favourites
});

export default rootReducer;