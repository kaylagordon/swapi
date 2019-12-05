import React from 'react';
import './MovieCard.css';

function MovieCard({ movie, switchPages }) {
  return (
    <section className='movie-card'>
      <h3>EPISODE {movie.episode_id}</h3>
      <h2 className='movie-title'>{movie.title.toUpperCase()}</h2>
      <h4>RELEASED IN {movie.release_date.split('-')[0]}</h4>
      <button
        className='view-characters-button'
        // onClick={() => switchPages('characters')}
      >
      VIEW CHARACTERS
      </button>
    </section>
  );
}

export default MovieCard;
