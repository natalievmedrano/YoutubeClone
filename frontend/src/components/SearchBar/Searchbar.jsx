import React, { useState } from "react";

const SearchBar = ({ fetchVideos }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchVideos(query);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={handleChange} value={query}></input>
      <button type="submit">search</button>
    </form>
  );
};

export default SearchBar;
