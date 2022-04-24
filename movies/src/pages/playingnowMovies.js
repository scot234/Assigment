import React from "react";
import { getPlayingnowMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PageTemplate from '../components/templateMovieListPage';
import PlaylistAddIcon from '../components/cardIcons/addToPlaylist';

const PlayingnowMoviesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('playingnow', getPlayingnowMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title='Movies playingnow'
      movies={movies}
      action={(movie) => {
        return <PlaylistAddIcon movie={movie} />
      }}
    />
  );
};

export default PlayingnowMoviesPage;