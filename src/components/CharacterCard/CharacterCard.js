import React from 'react';
import './CharacterCard.css';
import { Link } from 'react-router-dom';

function CharacterCard({ character }) {

  return (
    <section className='character-card'>
      <h2>{character.name}</h2>
      <h4></h4>
    </section>
  );
}

export default CharacterCard;
