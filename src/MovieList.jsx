import React from 'react';

import MovieListEntry from './MovieListEntry';

const MovieList = (props) => (
  <div className='movie-list'>
    {props.displayedMovies.map((movie)=> <MovieListEntry key={movie.id} movie={movie} />)}
  </div>  
)

export default MovieList;
