import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FavouritesButton = ({ url, children }) => (
  <Link to={url} className="btn btn-info">
    {children}
  </Link>
);

FavouritesButton.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default FavouritesButton;
