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
    let characters = [];
    this.props.characterURLs.map(character => {
      return fetch(character)
      .then(response => response.json())
      .then(data => {
        let name = data.name;

        let speciesInfo = fetch(data.species[0])
          .then(response => response.json())
          .then(data => data.name)

        let homeworldInfo = fetch(data.homeworld)
          .then(response => response.json())
          .then(data => {
            return [data.name, data.population]
          })

        let films = data.films.map(film => {
          return fetch(film)
          .then(response => response.json())
          .then(data => data.title)
        })

        Promise.all([name, speciesInfo, homeworldInfo, ...films])
          .then(data => {
            characters.push({
              name: data[0],
              species: data[1],
              homeworld: data[2],
              films: data.slice(3)
            })
            if (characters.length > 9) {
              this.setState({
                characters: characters
              })
            }
          })
      })
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
