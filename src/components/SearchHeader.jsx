import React, { Component } from "react";

import { Form, Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { movies } from "../actions";

import FavouritesButton from "./FavouritesButton";

class SearchHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };
  }

  handleSearch = (e) => {
    e.preventDefault();
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&page=1&query=${this.state.query}`;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsonObj) => {
        this.props.movies(jsonObj.results);
      });
  };

  render() {
    return (
      <Form onSubmit={this.handleSearch}>
        <Form.Group as={Row}>
          <Col xs={12} sm={2}>
            <FavouritesButton url="/favourites" type="info">
              View Favourites
            </FavouritesButton>
          </Col>
          <Col xs={12} sm={8}>
            <Form.Control
              type="text"
              placeholder="Name of a movie..."
              onChange={(event) =>
                this.setState({
                  query: event.target.value,
                })
              }
            />
          </Col>
          <Col xs={12} sm={2}>
            <Button
              bsstyle="primary"
              type="submit"
              disabled={this.state.query === ""}
            >
              Search
            </Button>
          </Col>
        </Form.Group>
      </Form>
    );
  }
}

export default connect(null, { movies })(SearchHeader);
