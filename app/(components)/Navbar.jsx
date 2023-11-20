"use client";
import { useState } from "react";

const Navbar = ({ getQueryText }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    getQueryText(query);
    // console.log("Submitting search with query:", query);
  };

  return (
    <nav>
      <div className="flex flex-col md:flex-row gap-3 justify-between px-10 py-6 shadow-2xl items-center">
        <p className="text-blue-500 text-2xl font-bold">Movies Database</p>
        <form
          className="flex flex-wrap justify-center gap-1"
          autoComplete="off"
          onSubmit={handleSearch}
        >
          <input
            type="search"
            aria-label="search"
            name="query"
            id="search"
            placeholder="Search a movie"
            className="px-10 py-2 md:py-4 border rounded-md m-0"
            value={query}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="px-10 py-2 md:py-4 bg-blue-500 text-white rounded-md"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
