"use client";
import { useEffect, useState } from "react";
import Card from "../(components)/Card";
import Navbar from "../(components)/Navbar";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=1ab0c7d4ccf2120d836d098881dd51d0";
const page = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMovies();
  });

  const getMovies = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setMovies(data.results);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const getQuery = (query) => {
    setSearchText(query);
    console.log("searchText", searchText);
  };

  return (
    <>
      <Navbar getQueryText={getQuery} />

      <div className="flex flex-wrap gap-2 justify-center bg-gradient-to-r from-cyan-400 to-blue-500 py-4 px-3">
        <Card mapData={movies} />
      </div>
    </>
  );
};

export default page;
