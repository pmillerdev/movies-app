import React, { Component } from "react";
import PropTypes from "prop-types";
import { addToFavourites, removeFromFavourites } from "../actions";
import { connect } from "react-redux";

class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favourited: false
    };
  }

  handleAddFavourite = () => {
    this.setState({
      favourited: !this.state.favourited
    });
    this.props.addToFavourites(this.props.movie);
  };

  handleRemoveFavourite = () => {
    this.setState({
      favourited: !this.state.favourited
    });
    this.props.removeFromFavourites(this.props.movie);
  };

  displayFavouriteIcon = () => {
    return !this.state.favourited ? 
    (<span className="glyphicon glyphicon-heart-empty"
      onClick={this.handleAddFavourite}
      style={{ color: "gold", cursor: "pointer"}}
    ></span>) :
    (<span className="glyphicon glyphicon-heart"
      onClick={this.handleRemoveFavourite}
      style={{ color: "gold", cursor: "pointer"}}
    ></span>)
  };

  formatDate = moviedate => {
     return moviedate.split("-").reverse().join("/");
  };

  render() {
    const movie = this.props.movie;
    return(
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" rel="noopener norefferer"><img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="None" /></a>
          <div className="caption">
            <h3>{movie.title} {!this.props.showFavButton && this.displayFavouriteIcon()}</h3>
            <p id="overview" >{movie.overview}</p>
            <p>Release Date: {this.formatDate(movie.release_date)}</p>
            <p>Rating: <span className="badge badge-default"><span className="glyphicon glyphicon-star" aria-hidden="true"></span>{" "}{movie.vote_average}</span></p>
          </div>
        </div>
      </div>
    )
  }
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  showFavButton: PropTypes.bool
}

export default connect(null, { addToFavourites, removeFromFavourites })(Movie);