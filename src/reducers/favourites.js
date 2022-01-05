import { ADD_FAV, REMOVE_FAV } from "../actions";

const favourites = (state = [], action) => {
  switch(action.type) {
    case ADD_FAV:
      return [ ...state, action.movie];
    case REMOVE_FAV:
      return state.filter(item => item.id !== action.movie.id);
    default:
      return state;
  }
}

export default favourites;