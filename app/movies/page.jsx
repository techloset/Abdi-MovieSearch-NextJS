"use client";
import { useEffect, useState } from "react";
import Card from "../(components)/Card";
import Link from "next/link";

const page = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async (e) => {
    try {
      setLoading(true);
      const res = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT);
      const data = await res.json();
      setMovies(data.results);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const searchMovie = async (e) => {
    e.preventDefault();
    if (query === "") {
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL_SEARCH}&query=${query}`
      );
      const data = await res.json();
      setMovies(data.results);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <nav>
        <div className="flex flex-col md:flex-row gap-3 justify-between px-10 py-6 shadow-2xl items-center">
          <Link href="/" className="text-blue-500 text-2xl font-bold">
            Movies Database
          </Link>
          <form
            className="flex flex-wrap justify-center gap-1"
            autoComplete="off"
            onSubmit={searchMovie}
          >
            <input
              type="search"
              aria-label="search"
              name="query"
              id="search"
              placeholder="Search a movie"
              className="px-10 py-2 md:py-4 border rounded-md m-0"
              value={query}
              onChange={changeHandler}
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
      {/* nav End */}
      <div className="flex flex-wrap gap-2 justify-center bg-gradient-to-r min-h-screen from-cyan-400 to-blue-500 py-4 px-3">
        {loading ? (
          <h2>Loading Please Wait</h2>
        ) : movies.length > 0 ? (
          <Card mapData={movies} />
        ) : (
          <h2>Sorry No Movie Found. Try changing search query</h2>
        )}
      </div>
    </>
  );
};

export default page;
