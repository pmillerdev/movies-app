import { MOVIES } from "../actions";

const movies = (state, action) => {
  switch(action.type) {
  case MOVIES:
    console.log("Movies are ", action.items);
    return action.items
  default:
    return state;
  } 
}

export default movies;