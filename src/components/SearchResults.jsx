import React, { Component } from "react";
import SearchBox from "./SearchBox";
import Movie from "./Movie";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SearchResults extends Component {
  render() {
    return(
      <div>
        <Link to={process.env.PUBLIC_URL + '/favourites'} className="favourites-button btn btn-primary">View My Favourites</Link>
        <SearchBox />
        {this.props.movies.length > 0 ? (
          <div>
            {this.props.movies.map(item => 
              (<Movie key={item.id} movie={item} />)
            )}
          </div>
        ) : (<div>Your search returned no movies, please try again.</div>)}          
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