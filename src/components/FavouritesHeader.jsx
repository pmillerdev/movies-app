import React from "react";

import { Row, Col } from "react-bootstrap";

import FavouritesButton from "./FavouritesButton";

const FavouritesHeader = () => (
  <Row>
    <Col sm={2}>
      <FavouritesButton url="/" type="info">
        Back to Search
      </FavouritesButton>
    </Col>
    <Col sm={10}>
      <h4>
        My Favourite Movies{" "}
        <span
          className="glyphicon glyphicon-heart"
          style={{ color: "gold", top: "3px" }}
        ></span>
      </h4>
    </Col>
  </Row>
);

export default FavouritesHeader;
