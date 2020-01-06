import React, { useState, useEffect } from "react";
import Search from "./Search";
import axios from "axios";
import SearchResult from "./SearchResult";

const Body = () => {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchValue) {
      axios({
        method: "GET",
        url: `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchValue}`
      }).then(res => {
        const { data } = res;
        const { Response, Search } = data;
        if (Response === "True") {
          setError(null);
          setResults(Search);
        } else if (Response === "False") {
          setError(data.Error);
        } else {
          setError(JSON.stringify({ data }, null, 2));
        }
      });
    }
  }, [searchValue]);
  return (
    <div>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      {error && <span>{error}</span>}
      {!error && results && (
        <div className="results">
          {results.map(({ imdbID, Poster, Title, Type, Year }, i) => (
            <SearchResult
              id={imdbID}
              key={i}
              posterURL={Poster}
              title={Title}
              type={Type}
              year={Year}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
