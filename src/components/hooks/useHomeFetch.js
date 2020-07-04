import {useEffect, useState} from "react";
import {POPULAR_BASE_URL} from "../../config";

export const useHomeFetch = () => {
  const [state, setState] = useState({movies: []});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(true);
    const isLoadMore = endpoint.search('page');

    try {
      const result = await (await fetch(endpoint)).json();
      console.log(result);
      setState(prevState => ({
        ...prevState,
        movies: isLoadMore !== -1 ? [...prevState.movies, ...result.results] : [...result.results],
        heroImage: prevState.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    (async function () {
        await fetchMovies(`${POPULAR_BASE_URL}`);
      }
    )();
  }, []);


  return [{state, loading, error}, fetchMovies];
}