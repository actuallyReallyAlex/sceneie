import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <Fragment>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        onChange={e => setSearchValue(e.target.value)}
        type="text"
        value={searchValue}
      />
    </Fragment>
  );
};

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired
};

export default Search;
