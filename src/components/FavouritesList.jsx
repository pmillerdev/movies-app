import React, { Component } from "react";
import Movie from "./Movie";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class FavouritesList extends Component {

  render() {
    return(
      <div>
        <Link to={process.env.PUBLIC_URL ? "/movies-app" : "/"}>Back to Search</Link>
        <h4>My Favourite Movies</h4>
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