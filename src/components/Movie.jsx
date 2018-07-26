import React, { Component } from "react";
import PropTypes from "prop-types";

class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favourited: false
    };
  }

  handleFavouriteClick = () => this.setState({
    favourited: !this.state.favourited
  });

  displayFavouriteIcon = () => {
    return !this.state.favourited ? 
    (<span className="glyphicon glyphicon-heart-empty"
      onClick={this.handleFavouriteClick}
    ></span>) :
    (<span className="glyphicon glyphicon-heart"
      onClick={this.handleFavouriteClick}
    ></span>)
  };

  render() {
    const movie = this.props.movie;
    return(
    <div className="col-sm-6 col-md-4">
      <div className="thumbnail">
        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="None" />
        <div className="caption">
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: <span className="badge badge-default"><span className="glyphicon glyphicon-star" aria-hidden="true"></span>{" "}{movie.vote_average}</span></p>
          {this.displayFavouriteIcon()}
        </div>
      </div>
    </div>
    )
  }
}

Movie.propTypes = {
  movie: PropTypes.object
}

export default Movie;