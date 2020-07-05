import React from "react";
import {StyledMovieThumb} from "../styles/StyledMovieThumb";
import {Link} from "@reach/router";
import PropTypes from "prop-types";

const MovieThumb = ({image, movieId, clickable}) => {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <Link to={`/${movieId}`}><img src={image} className="clickable" alt="movieThumb"/></Link>
      ) : (
        <img src={image} alt="movieThumb"/>
      )}
    </StyledMovieThumb>
  )
}

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool
}

export default MovieThumb;