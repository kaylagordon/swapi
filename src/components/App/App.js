import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import UserProfile from '../UserProfile/UserProfile';
import MovieContainer from '../MovieContainer/MovieContainer';
import { Route, Redirect } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      name: '',
      favoriteQuote: '',
      ranking: '',
      movies: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films')
    .then(response => response.json())
    .then(movies => {
      this.setState({
        movies: movies.results
      })
    })
    .catch(error => console.log(error))
  }

  updateStateFromForm = (name, favoriteQuote, ranking) => {
    this.setState({
      loggedIn: true,
      name: name,
      favoriteQuote: favoriteQuote,
      ranking: ranking
    })
  }

  fetchCharacters = (movie) => {
    fetch(movie.characters[1])
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }


  render() {
    return (
      <main className="App">
        <Route exact path="/">
          {this.state.loggedIn ? <Redirect to="/movies" /> : (
            <>
              <Header heading='HELLO, YOUNG JEDI'/>
              <Form
                updateStateFromForm={this.updateStateFromForm}
              />
            </>
          )}
        </Route>
        <Route path='/movies' render={() => {
          return (
            <>
              <UserProfile
                name={this.state.name}
                favoriteQuote={this.state.favoriteQuote}
                ranking={this.state.ranking}
              />
              <Header heading='THE MOVIES'/>
              <MovieContainer
                movies={this.state.movies}
                fetchCharacters={this.fetchCharacters}
              />
            </>
          )
        }} />
        <Route path='/characters' render={() => {
          return (
            <>
              <UserProfile
                name={this.state.name}
                favoriteQuote={this.state.favoriteQuote}
                ranking={this.state.ranking}
              />
              <Header heading='THE CHARACTERS'/>
            </>
          )
        }} />
      </main>
    );
  }
};

export default App;
