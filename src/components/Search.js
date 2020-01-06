import React from "react";
import PropTypes from "prop-types";

const Search = ({ searchValue, setSearchValue }) => (
  <div className="search__container">
    <label className="search__label" htmlFor="search">
      Search
    </label>
    <input
      className="search__input"
      id="search"
      onChange={e => setSearchValue(e.target.value)}
      placeholder="Search"
      type="text"
      value={searchValue}
    />
  </div>
);

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired
};

export default Search;
