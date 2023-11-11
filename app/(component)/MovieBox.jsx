import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
// import noImage from "../../public";

const API_IMG = "https://image.tmdb.org/t/p/w500/";
const MovieBox = ({
  title,
  poster_path,
  backdrop_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [show, setShow] = useState(false);
  const img = API_IMG + poster_path;

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="card text-center bg-warning mb-3 col-md-4 col-lg-2  ">
      <img
        className="card-img-top"
        src={!poster_path ? "/assets/noImage.jpg" : img}
        alt={title}
      />
      <div className="card-body ">
        <h4>IMDb Rating: {vote_average}</h4>
        <h5>Release Date: {release_date}</h5>
        <button type="button" className="btn btn-dark" onClick={handleShow}>
          View More
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              className="card-img-top img-fluid"
              style={{ width: "100%" }}
              src={API_IMG + backdrop_path}
              alt={title}
            />
            <h3>{title}</h3>
            <h4>IMDb: {vote_average}</h4>
            <h5>Release Date: {release_date}</h5>
            <br></br>
            <h6>Overview</h6>
            <p>{overview}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default MovieBox;
