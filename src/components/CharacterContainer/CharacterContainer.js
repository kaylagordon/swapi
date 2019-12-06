import React from 'react';
import './CharacterContainer.css';
import CharacterCard from '../CharacterCard/CharacterCard';

function CharacterContainer({ characters }) {
  const renderCards = () => {
    return characters.map(character => {
      return (
        <CharacterCard
          character={character}
        />
      )
    })
  }

  return (
    <section className='character-container'>
      {renderCards()}
    </section>
  );
}

export default CharacterContainer;
