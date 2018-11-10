import React, { Component } from "react";

import { Form, FormControl, FormGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { API_KEY } from "../secrets";
import { movies } from "../actions";
  
class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }

  handleSearch = () => {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=1&query=${this.state.query}`
    fetch(url, {
      method: "GET"
    }).then(response => response.json()).then(jsonObj => { this.props.movies(jsonObj.results)});
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  };

  render() {
    return(
      <Form inline className="col-md-6 col-md-offset-4">
        <FormGroup
          controlId="formBasicText"
        >
          <FormControl
            type="text"
            placeholder="Name of movie"
            onChange={(event) => this.setState({
              query: event.target.value
            })}
            onKeyPress={this.handleKeyPress} 
          />
          {" "}
          <Button bsStyle="primary" onClick={this.handleSearch}>Search</Button>
        </FormGroup>
      </Form>
    )
  }
}

export default connect(null, { movies })(SearchBox);