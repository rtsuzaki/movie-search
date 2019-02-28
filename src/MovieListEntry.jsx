import React from 'react';
import PropTypes from 'prop-types';

const MovieListEntry = (props) => {
  const date = new Date(props.movie.release_date).toDateString().split(' ');
  const releaseDate = `${date[1]} ${date[2]}, ${date[3]}`;
  
  return (
    <div className='movie-list-entry'>
      <div className="movie-poster">
        <img className="movie-poster" src={`http://image.tmdb.org/t/p/w185${props.movie.poster_path}`} alt={props.movie.title} />
      </div>
      
      <div className="movie-details">
        <h3 className="movie-title">
          {props.movie.title}
        </h3>
        <div>
          {releaseDate}
        </div> 
        <div className="movie-overview">
          {props.movie.overview}
        </div>
        <div className="movie-rating">
          {props.movie.vote_average}/10
        </div>
        <div className="rating-count">
          {props.movie.vote_count} Ratings
        </div>
      </div>
    </div>  
  )  
}

MovieListEntry.propTypes = {
  movie: PropTypes.object,
};

export default MovieListEntry;