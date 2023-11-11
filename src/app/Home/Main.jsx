"use client";
import React from "react";
import { useEffect, useState } from "react";
import Card from "../(components)/Card";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=1ab0c7d4ccf2120d836d098881dd51d0";
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=1ab0c7d4ccf2120d836d098881dd51d0&query";
function Main() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="flex flex-wrap justify-center gap-8">
      <div>
        {movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
        ) : (
          <h2>Sorry !! No Movies Found</h2>
        )}
      </div>
    </div>
  );
}

export default Main;
