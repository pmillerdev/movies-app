import { ADD_FAV, REMOVE_FAV } from "../actions";

const favourites = (state = [], action) => {
  switch(action.type) {
    case ADD_FAV:
      let currentFavourites = [ ...state, action.movie];
      return currentFavourites;
    case REMOVE_FAV:
      currentFavourites = state.filter(item => item.id !== action.movie.id);
      return currentFavourites;
    default:
      return state;
  }
}

export default favourites;