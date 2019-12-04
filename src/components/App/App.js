import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import UserProfile from '../UserProfile/UserProfile';
import MovieContainer from '../MovieContainer/MovieContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'movies',
      name: '',
      favoriteQuote: '',
      ranking: '',
      movies: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films')
    .then(response => response.json())
    .then(data => this.setState({
      movies: data.results
    }))
    .catch(error => console.log(error))
  }

  switchPages = page => {
    this.setState({
      currentPage: page
    })
  }

  updateStateFromForm = (name, favoriteQuote, ranking) => {
    this.setState({
      name: name,
      favoriteQuote: favoriteQuote,
      ranking: ranking
    })
  }

  render() {
    return (
      <main className="App">
        {this.state.currentPage === 'landing' &&
        <>
          <Header heading='HELLO, YOUNG JEDI'/>
          <Form
            switchPages={this.switchPages}
            updateStateFromForm={this.updateStateFromForm}
          />
        </>}
        {this.state.currentPage === 'movies' &&
        <>
          <UserProfile
            name={this.state.name}
            favoriteQuote={this.state.favoriteQuote}
            ranking={this.state.ranking}
          />
          <Header heading='THE MOVIES'/>
          <MovieContainer
            movies={this.state.movies}
          />
        </>}
        {this.state.currentPage === 'characters' &&
        <>
          <UserProfile
            name={this.state.name}
            favoriteQuote={this.state.favoriteQuote}
            ranking={this.state.ranking}
          />
          <Header heading='THE CHARACTERS'/>
        </>}
      </main>
    );
  }
};

export default App;
