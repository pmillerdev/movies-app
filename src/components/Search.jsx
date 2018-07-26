import React, { Component } from "react";

import { Form, FormControl, FormGroup, Button } from "react-bootstrap";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }

  handleSearch = () => {
    return console.log(this.state.query)
  };

  render() {
    return(
      <div>
        <Form inline className="col-md-6 col-md-offset-4">
          <FormGroup
            controlId="formBasicText"
          >
            <FormControl
              type="text"
              placeholder="Wonder Woman"
              onChange={(event) => this.setState({
                query: event.target.value
              })}
            />
            {" "}
            <Button bsStyle="success" onClick={this.handleSearch}>Search</Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Search;