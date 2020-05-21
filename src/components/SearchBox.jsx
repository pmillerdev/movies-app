import React, { Component } from "react";

import { Form, FormControl, FormGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { API_KEY } from "../secrets";
import { movies } from "../actions";

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };
  }

  handleSearch = (e) => {
    e.preventDefault();
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=1&query=${this.state.query}`;
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
      <Form inline>
        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            placeholder="Name of movie"
            onChange={(event) =>
              this.setState({
                query: event.target.value,
              })
            }
          />{" "}
          <Button bsstyle="primary" type="submit" onClick={this.handleSearch}>
            Search
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default connect(null, { movies })(SearchBox);
