import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

function MovieCard({ movie, fetchCharacters }) {
  const viewCharacters = (event) => {
    console.log(event.target.id);
    fetchCharacters(movie);
  }

  return (
    <section className='movie-card'>
      <h3>EPISODE {movie.episode_id}</h3>
      <h2 className='movie-title'>{movie.title.toUpperCase()}</h2>
      <h4>RELEASED IN {movie.release_date.split('-')[0]}</h4>
      <Link to='/characters'>
        <button className='view-characters-button' id={`${movie.episode_id}`} onClick={(event) => viewCharacters(event)}>VIEW CHARACTERS</button>
      </Link>
    </section>
  );
}

export default MovieCard;
