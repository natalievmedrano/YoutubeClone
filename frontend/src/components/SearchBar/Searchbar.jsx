import React, { useState } from "react";

const SearchBar = ({ fetchVideos}) => {
  const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
      event.persist();
      setQuery(query,[event.data.items]);

      fetchVideos()
    };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={query}></input>
      <button type="submit">search</button>
    </form>
  );
};

export default SearchBar;
