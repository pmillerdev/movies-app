import React, { Component } from "react";
import Movie from "./Movie";
import { connect } from "react-redux";

import Button from "./Button";

class FavouritesList extends Component {

  render() {
    return(
      <div>
        <div className="col-xs-12">
          <Button url={process.env.PUBLIC_URL ? "/movies-app" : "/"} type="info">Back to Search</Button>
          <h4>My Favourite Movies <span className="glyphicon glyphicon-heart" style={{ color: "gold", top: "3px"}}></span></h4>
          <hr />
        </div>            
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