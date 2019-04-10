import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ url, type, children }) => (
    <Link to={url} className={`btn btn-${type}`}>{children}</Link>
);

Button.propTypes = {
    url: PropTypes.string.isRequired,
    type: PropTypes.string,
    children: PropTypes.string.isRequired
}

export default Button;