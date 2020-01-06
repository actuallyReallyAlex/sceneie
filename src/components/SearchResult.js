import React from "react";
import PropTypes from "prop-types";

const SearchResult = ({ posterURL, title, year }) => {
  const randomNumber = Math.floor(Math.random() * 333) + 1;

  return (
    <div className="search-result">
      <h2>{title}</h2>
      <img
        alt="Poster"
        className="search-result__poster"
        src={
          posterURL === "N/A"
            ? `https://gradientjoy.com/300x400?id=${randomNumber}`
            : posterURL
        }
      />
      <span className="search-result__year">({year})</span>
    </div>
  );
};

SearchResult.propTypes = {
  posterURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};

export default SearchResult;
