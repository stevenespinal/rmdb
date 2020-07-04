import React from "react";
import {StyledMovieThumb} from "../styles/StyledMovieThumb";
import {Link} from "@reach/router";

const MovieThumb = ({image, movieId, clickable, movieName}) => {
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

export default MovieThumb;