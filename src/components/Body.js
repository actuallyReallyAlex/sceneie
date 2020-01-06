import React, { useState } from "react";
import Search from "./Search";

const Body = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <pre>{JSON.stringify({ searchValue }, null, 2)}</pre>
    </div>
  );
};

export default Body;
