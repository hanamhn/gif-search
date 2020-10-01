import React, { Component } from "react";
import axios from "axios";
import GifList from "./GifList";
import SearchForm from "./SearchForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      loading: true,
    };
  }
  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = "cat") => {
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=zkICEZWJdXTdrRkdgmPeAcd2siC2BAOd`
      )
      .then((response) => {
        this.setState({
          gifs: response.data.data,
          loading: false,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>
        </div>
        <div className="main-content">
          {this.state.loading ? (
            <p>Loading...</p>
          ) : (
            <GifList data={this.state.gifs} />
          )}
        </div>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
