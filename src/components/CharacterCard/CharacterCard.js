import React, { Component } from 'react';
import './CharacterCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CharacterCard({ character }) {
  const showFilms = () => {
    let counter=0;
    return character.films.map(film => {
      counter++;
      return <p key={counter}>- {film}</p>
    })
  }

  return (
    <section className='character-card'>
      <h2>{character.name}</h2>
      <h4>SPECIES: <br /> {character.species}</h4>
      <h4>HOMEWORLD: <br /> {character.homeworld[0]}</h4>
      <h4>POPULATION: <br /> {character.homeworld[1]}</h4>
      <h4>FILMS:</h4>
      {showFilms()}
    </section>
  )
}

CharacterCard.propTypes = {
  character: PropTypes.object
}

export default CharacterCard;
