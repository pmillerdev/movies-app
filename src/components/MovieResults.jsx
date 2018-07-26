import React, { Component } from "react";
import Search from "./Search";
import { connect } from "react-redux";

class MovieResults extends Component {
  render() {
    return(
      <div>
        <h1>Movie results will go here</h1>
        <Search />
      </div>
    )
  }
};

const mapStateToProps = state => {
  console.log(state);
  return {

  }
}

export default connect(mapStateToProps, null)(MovieResults);