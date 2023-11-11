"use client";
import React, { useState, useEffect } from "react";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Spinner,
} from "react-bootstrap";
import MovieBox from "../(component)/MovieBox";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=1ab0c7d4ccf2120d836d098881dd51d0";
function page() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async (e) => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=1ab0c7d4ccf2120d836d098881dd51d0&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" className="main">
        <Container fluid>
          <Navbar.Brand href="/home">MovieDb App</Navbar.Brand>
          <Navbar.Brand href="/home">Trending</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="nabarScroll">
            <Nav
              className="me-auto my-2 my-lg-3"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>

            <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
              <FormControl
                type="search"
                placeholder="Movie Search"
                className="me-2"
                aria-label="search"
                name="query"
                value={query}
                onChange={changeHandler}
              ></FormControl>
              <Button variant="warning" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="main">
        {movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((movieReq) => (
                <MovieBox key={movieReq.id} {...movieReq} />
              ))}
            </div>
          </div>
        ) : (
          <h2>Loading Please Wait</h2>
        )}
      </div>
    </>
  );
}

export default page;
