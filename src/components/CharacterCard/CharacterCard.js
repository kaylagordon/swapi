import React, { Component } from 'react';
import './CharacterCard.css';
import { Link } from 'react-router-dom';

class CharacterCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.character.name,
      species: '',
      homeworld: '',
      homeworldPop: '',
      films: []
    }
  }

  render() {
    return (
      <section className='character-card'>
        <h2>{this.state.name}</h2>
        <button className='favorite-button'>ADD TO MY FAVORITES</button>
      </section>
    )
  }
}

export default CharacterCard;
