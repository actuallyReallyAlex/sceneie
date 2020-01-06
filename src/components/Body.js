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

        switch (Response) {
          case "True":
            setError(null);
            setResults(Search);
            break;
          case "False":
            setError(data.Error);
            break;
          default:
            setError(JSON.stringify({ data }, null, 2));
            break;
        }
      });
    } else {
      setError(null);
    }
  }, [searchValue]);
  return (
    <div id="body">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      {error && <span className="error">{error}</span>}
      {!error && results && (
        <div className="results">
          {results.map(({ Poster, Title, Year }, i) => (
            <SearchResult
              key={i}
              posterURL={Poster}
              title={Title}
              year={Year}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
