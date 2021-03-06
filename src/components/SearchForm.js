import React, { Component } from "react";

class SearchForm extends Component {
  state = {
    searchText: "",
  };
  onSearchChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
  };
  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <label htmlFor="search" className="is-hidden">
          Search
        </label>
        <input
          type="search"
          onChange={this.onSearchChange}
          name="search"
          placeholder="Search..."
        />
        <button type="submit" id="submit" className="search-button">
          <i className="material-icons icn-search">search</i>
        </button>
      </form>
    );
  }
}

export default SearchForm;
