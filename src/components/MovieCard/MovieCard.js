import React from 'react';
import './MovieCard.css';

function MovieCard({ movie }) {
  return (
    <section className='movie-card'>
      <h3>EPISODE {movie.episode_id}</h3>
      <h2>{movie.title.toUpperCase()}</h2>
      <h4>RELEASED IN {movie.release_date.split('-')[0]}</h4>
      <button>VIEW CHARACTERS</button>
    </section>
  );
}

export default MovieCard;
