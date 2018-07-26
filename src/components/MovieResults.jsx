import React, { Component } from "react";
import Search from "./Search";
import Movie from "./Movie";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class MovieResults extends Component {
  render() {
    return(
      <div>
        <Link to="/fav">My Favourites</Link>
        <hr />
        <Search />
          {this.props.movies.map(item => 
            (<Movie key={item.id} movie={item} />)
          )}
      </div>
    )
  }
};

const mapStateToProps = state => {
  console.log(state);
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, null)(MovieResults);