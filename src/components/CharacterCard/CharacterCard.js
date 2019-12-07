import React, { Component } from 'react';
import './CharacterCard.css';
import { Link } from 'react-router-dom';

class CharacterCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.character.name,
      species: '',
      homeworld: [],
      films: []
    }
  }

  componentDidMount() {
    let characterInfo = [];
    let films = [];

    characterInfo.push(fetch(this.props.character.species)
    .then(response => response.json())
    .then(data =>  data.name))

    characterInfo.push(fetch(this.props.character.homeworld)
    .then(response => response.json())
    .then(data => {
       return [data.name, data.population]
    }))

    films = this.props.character.films.map(film => {
      return fetch(film)
      .then(response => response.json())
      .then(data => data.title)
    })

    Promise.all([...characterInfo, ...films])
    .then(data => {
      console.log(data);
      this.setState({
        species: data[0],
        homeworld: data[1],
        films: data.slice(2)
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
        <h2>{this.state.name}</h2>
        <h4>SPECIES: <br /> {this.state.species}</h4>
        <h4>HOMEWORLD: <br /> {this.state.homeworld[0]}</h4>
        <h4>POPULATION: <br /> {this.state.homeworld[1]}</h4>
        <h4>FILMS:</h4>
        {this.showFilms()}
        <button className='favorite-button'>ADD TO MY FAVORITES</button>
      </section>
    )
  }
}

export default CharacterCard;
