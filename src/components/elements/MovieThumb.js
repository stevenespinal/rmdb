import React from "react";
import {StyledMovieThumb} from "../styles/StyledMovieThumb";

const MovieThumb = ({image, movieId, clickable, movieName}) => {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <img src={image} className="clickable" alt="movieThumb"/>
      ) : (
        <img src={image} alt="movieThumb"/>
      )}
    </StyledMovieThumb>
  )
}

export default MovieThumb;