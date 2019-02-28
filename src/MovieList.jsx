import React from 'react';
import PropTypes from 'prop-types';

import MovieListEntry from './MovieListEntry';

const MovieList = (props) => (
  <div className='movie-list'>
    {props.displayedMovies.map((movie)=> <MovieListEntry key={movie.id} movie={movie} />)}
  </div>  
)

MovieList.propTypes = {
  displayedMovies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieList;
