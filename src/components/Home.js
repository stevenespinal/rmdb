import React, {useState} from "react";
import {API_KEY, API_URL, BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from "../config";
import Grid from "./elements/Grid";
import HeroImage from "./elements/HeroImage";
import MovieThumb from "./elements/MovieThumb";
import SearchBar from "./elements/SearchBar";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";

const Home = () => {
  const [state, setState] = useState({movies: []});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(true);
    try {
      const result = await (await fetch(endpoint)).json();

    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <HeroImage/>
      <SearchBar/>
      <Grid/>
      <MovieThumb/>
      <Spinner/>
      <LoadMoreBtn/>
    </>
  );
}

export default Home;