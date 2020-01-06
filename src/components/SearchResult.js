import React from "react";
import PropTypes from "prop-types";

const SearchResult = ({ posterURL, title, year }) => {
  return (
    <div className="search-result">
      <h2>{title}</h2>
      {posterURL !== "N/A" && <img alt="Poster" src={posterURL} />}
      <span className="search-result__year">({year})</span>
    </div>
  );
};

SearchResult.propTypes = {
  imdbID: PropTypes.string,
  posterURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};

export default SearchResult;
