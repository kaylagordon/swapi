import React from 'react';
import './MovieContainer.css';
import MovieCard from '../MovieCard/MovieCard';

function MovieContainer({ movies, updateStateWithMovie }) {
  const renderCards = () => {
    return movies.sort((a, b) => a.episode_id - b.episode_id).map(movie => {
      return (
        <MovieCard
          key={Math.random()}
          movie={movie}
          updateStateWithMovie={updateStateWithMovie}
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

export default MovieContainer;
