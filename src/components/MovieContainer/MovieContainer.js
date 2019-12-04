import React from 'react';
import './MovieContainer.css';
import MovieCard from '../MovieCard/MovieCard';

function MovieContainer({ movies }) {
  const renderCards = () => {
    return movies.map(movie => {
      console.log(movie);
      return (
        <MovieCard movie={movie} />
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
