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

  componentDidMount() {
    fetch(this.props.character.homeworld)
    .then(response => response.json())
    .then(data => this.setState({
      homeworld: data.name,
      homeworldPop: data.population
    }))

    this.props.character.species.forEach(species => {
      fetch(species)
      .then(response => response.json())
      .then(data => this.setState({
        species: data.name
      }))
    })

    let films = [];

    this.props.character.films.forEach(film => {
      fetch(film)
      .then(response => response.json())
      .then(data => {
        films.push(data.title)
        this.setState({
          films: films
        })
      })
    })
  }

  showFilms = () => {
    return this.state.films.map(film => {
      return <p>- {film}</p>
    })
  }

  render() {
    return (
      <section className='character-card'>
        <h2>{this.state.name.toUpperCase()}</h2>
        <h4>SPECIES: {this.state.species}</h4>
        <h4>HOMEWORLD: {this.state.homeworld}</h4>
        <h4>POPULATION: {this.state.homeworldPop}</h4>
        <h4>FILMS:</h4>
        {this.showFilms()}
        <button className='favorite-button'>ADD TO MY FAVORITES</button>
      </section>
    )
  }
}

export default CharacterCard;
