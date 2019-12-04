import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      favoriteQuote: '',
      ranking: 'jedi-master'
    }
  }

  updateUserInfo = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form>
        <p className='form-text'>WHAT IS YOUR FIRST NAME?</p>
        <input
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.updateUserInfo}
        />
        <p className='form-text'>WHAT IS YOUR FAVORITE STAR WARS QUOTE?</p>
        <input
          type='text'
          name='favoriteQuote'
          value={this.state.favoriteQuote}
          onChange={this.updateUserInfo}
        />
        <p className='form-text'>HOW WELL DO YOU KNOW STAR WARS?</p>
        <select
          name='ranking'
          value={this.state.ranking}
          onChange={this.updateUserInfo}
        >
          <option value='jedi-master'>JEDI MASTER</option>
          <option value='jedi-knight'>JEDI KNIGHT</option>
          <option value='padawon'>PADAWON</option>
        </select>
        <button type='button'>LET'S GO</button>
      </form>
    )
  }
};
export default Form;
