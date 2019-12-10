import React from 'react';
import './MovieContainer.css';
import MovieCard from '../MovieCard/MovieCard';
import PropTypes from 'prop-types';

function MovieContainer({ movies, updateStateWithCharacters }) {
  const renderCards = () => {
    return movies.sort((a, b) => a.episode_id - b.episode_id).map(movie => {
      return (
        <MovieCard
          key={movie.episode_id}
          movie={movie}
          updateStateWithCharacters={updateStateWithCharacters}
        />
      )
    })
  }

  return (
    <section className='movie-container'>
      {renderCards()}
    </section>
  );
}

MovieContainer.propTypes = {
  movies: PropTypes.array,
  updateStateWithCharacters: PropTypes.func
}

export default MovieContainer;
