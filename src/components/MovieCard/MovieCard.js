import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function MovieCard({ movie, updateStateWithCharacters }) {

  return (
    <section className='movie-card'>
      <h3>EPISODE {movie.episode_id}</h3>
      <h2 className='movie-title'>{movie.title.toUpperCase()}</h2>
      <h4>RELEASED IN {movie.release_date.split('-')[0]}</h4>
      <Link to={`/movies/${movie.episode_id}`}>
        <button className='view-characters-button' onClick={() => updateStateWithCharacters(movie.characters)}>VIEW CHARACTERS</button>
      </Link>
    </section>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object,
  updateStateWithCharacters: PropTypes.func
}

export default MovieCard;
