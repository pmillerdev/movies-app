import React, { Component } from "react";
import SearchBox from "./SearchBox";
import Movie from "./Movie";
import { connect } from "react-redux";
import Button from "./Button";

class SearchResults extends Component {
  render() {
    return(
      <div>
        <div>
          <div className="col-xs-12 col-sm-4">
            <Button url={process.env.PUBLIC_URL + '/favourites'} type="info" >View my Favourites</Button>
          </div>        
          <SearchBox />
        </div>
        <hr />
        {this.props.movies.map(item => 
          (<Movie key={item.id} movie={item} />)
        )}
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, null)(SearchResults);