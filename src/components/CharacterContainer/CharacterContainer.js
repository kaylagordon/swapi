import React, { Component } from 'react';
import './CharacterContainer.css';
import CharacterCard from '../CharacterCard/CharacterCard';

class CharacterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    let characters = this.props.characterURLs.map(character => {
      return fetch(character)
      .then(response => response.json())
      .then(data => {
        return {
          name: data.name,
          species: data.species[0],
          homeworld: data.homeworld,
          films: data.films
        }
      })
      .catch(error => console.log(error))
    })

    Promise.all(characters)
    .then(data => {
      this.setState({ characters: data })
    })
  }

  renderCards = () => {
    return this.state.characters.map(character => {
      return (
        <CharacterCard
          character={character}
          key={Math.random()}
        />
      )
    })
  }

  render() {
    return (
    <section className='character-container'>
      {this.renderCards()}
    </section>
    );
  }
}

export default CharacterContainer;
