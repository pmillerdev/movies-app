import React, { Component } from "react";
import SearchBox from "./SearchBox";
import Movie from "./Movie";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SearchResults extends Component {
  render() {
    return(
      <div>
        <Link to={process.env.PUBLIC_URL + '/favourites'} >My Favourites</Link>
        <hr />
        <SearchBox />
        <br />
        <br />
        <div>
          {this.props.movies.map(item => 
            (<Movie key={item.id} movie={item} />)
          )}
          </div>
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

export default connect(mapStateToProps, null)(SearchResults);