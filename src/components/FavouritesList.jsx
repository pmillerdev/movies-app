import React, { Component } from "react";
import Movie from "./Movie";
import { connect } from "react-redux";

class FavouritesList extends Component {
  render() {
    return(
      <div>
        {this.props.favourites.map(fav => (
          <Movie key={fav.id} movie={fav} showFavButton />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    favourites: state.favourites
  }
}

export default connect(mapStateToProps, null)(FavouritesList);