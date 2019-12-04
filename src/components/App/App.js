import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import UserProfile from '../UserProfile/UserProfile';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'movies'
    }
  }

  switchPages = page => {
    this.setState({
      currentPage: page
    })
  }

  render() {
    return (
      <main className="App">
        {this.state.currentPage === 'landing' && <>
          <Header heading='HELLO, YOUNG JEDI'/>
          <Form switchPages={this.switchPages}/>
        </>}
        {this.state.currentPage === 'movies' && <>
          <UserProfile />
          <Header heading='THE MOVIES'/>
        </>}
        {this.state.currentPage === 'characters' && <>
          <Header heading='THE CHARACTERS'/>

        </>}
      </main>
    );
  }
};

export default App;
