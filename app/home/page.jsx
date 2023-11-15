"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Row,
} from "react-bootstrap";
import MovieBox from "../(component)/MovieBox";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=1ab0c7d4ccf2120d836d098881dd51d0";
function page() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(
    "process.env.NEXT_PUBLIC_API_URL",
    process.env.NEXT_PUBLIC_API_URL
  );

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async (e) => {
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
  console.log("movies", movies);

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=1ab0c7d4ccf2120d836d098881dd51d0&query=${query}`
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
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/home">Movies Database By Abdi</Navbar.Brand>
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
        {loading ? (
          <h2>Loading Please Wait</h2>
        ) : movies.length > 0 ? (
          <Container className="py-3">
            <Row className="gap-3 justify-content-center">
              {movies.map((movieReq) => (
                <MovieBox key={movieReq.id} {...movieReq} />
              ))}
            </Row>
          </Container>
        ) : (
          <h2>Sorry No Movie Found. Try changing search query</h2>
        )}
      </div>
    </>
  );
}

export default page;
