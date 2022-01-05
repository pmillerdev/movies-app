import React, { Component } from "react";
import Movie from "../components/Movie";
import { connect } from "react-redux";

import FavouritesHeader from "../components/FavouritesHeader";

class FavouritesList extends Component {
  render() {
    return (
      <>
        <FavouritesHeader />
        <hr />
        {this.props.favourites.map((fav) => (
          <Movie key={fav.id} movie={fav} isFavourite />
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favourites: state.favourites,
  };
};

export default connect(mapStateToProps, null)(FavouritesList);
