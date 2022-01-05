import React, { Component } from "react";
import SearchHeader from "../components/SearchHeader";
import Movie from "../components/Movie";
import { connect } from "react-redux";

class SearchResults extends Component {
  render() {
    return (
      <>
        <SearchHeader />
        <hr />
        {this.props.movies.length > 0 &&
          this.props.movies.map(
            (item) =>
              item && (
                <Movie
                  key={item.id}
                  movie={item}
                  isFavourite={
                    this.props.favourites.length > 0 &&
                    this.props.favourites.find((fav) => fav.id === item.id)
                      ? true
                      : false
                  }
                />
              )
          )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    favourites: state.favourites,
  };
};

export default connect(mapStateToProps, null)(SearchResults);
