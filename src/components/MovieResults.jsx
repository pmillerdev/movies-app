import React, { Component } from "react";
import Search from "./Search";
import Movie from "./Movie";
import { connect } from "react-redux";

class MovieResults extends Component {
  render() {
    return(
      <div>
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