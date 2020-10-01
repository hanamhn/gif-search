import React, { Component } from "react";
import GifList from "./GifList";
import SearchForm from "./SearchForm";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=zkICEZWJdXTdrRkdgmPeAcd2siC2BAOd&limit=25&rating=g"
    )
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ gifs: responseData });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm />
          </div>
        </div>
        <div className="main-content">
          <GifList />
        </div>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
