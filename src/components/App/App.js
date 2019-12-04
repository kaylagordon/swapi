import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'landing-page'
    }
  }

  render() {
    return (
      <main className="App">
        {this.state.currentPage === 'landing-page' && <>
          <Header />
          <Form />
        </>}
      </main>
    );
  }
};

export default App;
