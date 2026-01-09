import React from "react";
import "./search.css";
import { BiSearch } from "react-icons/bi";

const Search = ({ toSearch }) => {
  return (
    <div className="search-container">
      <BiSearch />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search Notes...."
        onChange={(event) => toSearch(event.target.value)}
      />
    </div>
  );
};

export default Search;
