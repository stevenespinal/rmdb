import React, {useState} from "react";
import Grid from "./elements/Grid";
import HeroImage from "./elements/HeroImage";
import MovieThumb from "./elements/MovieThumb";
import SearchBar from "./elements/SearchBar";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";
import {useHomeFetch} from "./hooks/useHomeFetch";
import {BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE, SEARCH_BASE_URL, POPULAR_BASE_URL} from "../config";
import NoImage from "./images/no_image.jpg";

const Home = () => {
  const [{error, loading, state: {heroImage, movies, currentPage, totalPages}}, fetchMovies] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async search => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;
    setSearchTerm(search);
    await fetchMovies(endpoint);
  }

  const loadMoreMovies = async () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`;
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;
    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    await fetchMovies(endpoint);

  }

  if (error) return <div>Something went wrong...</div>
  if (!movies[0]) return <Spinner/>;
  return (
    <>
      {!searchTerm && (
        <HeroImage
          title={heroImage.original_title} t
          ext={heroImage.overview}
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}/>
      )}
      <SearchBar callback={searchMovies}/>
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {movies.map((movie) => (
          <MovieThumb
            key={movie.id}
            clickable
            image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
      {loading && <Spinner/>}
      {currentPage < totalPages && !loading && <LoadMoreBtn text="Load More" callback={loadMoreMovies}/>}
    </>
  );
}

export default Home;