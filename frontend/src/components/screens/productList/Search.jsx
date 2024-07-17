// src/components/Search.jsx

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon

const Search = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
    // Add your search logic here
  };

  return (
    <div className="w-full max-w-xs">
      <form
        className="flex items-center bg-white p-0 rounded-full border"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-full focus:outline-none"
        />
        <button
          type="submit"
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
