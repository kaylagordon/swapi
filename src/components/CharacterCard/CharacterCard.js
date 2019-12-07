import React, { Component } from 'react';
import './CharacterCard.css';
import { Link } from 'react-router-dom';

function CharacterCard({ character }) {
  const showFilms = () => {
    return character.films.map(film => {
      return <p>- {film}</p>
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
      <button className='favorite-button'>ADD TO MY FAVORITES</button>
    </section>
  )
}

export default CharacterCard;
