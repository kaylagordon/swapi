import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      favoriteQuote: '',
      ranking: 'jedi-master',
      formComplete: false
    }
  }

  updateUserInfo = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = () => {
    if(this.state.name && this.state.favoriteQuote && this.state.ranking) {
      this.setState({ formComplete: true });
    } else {
      this.setState({ formComplete: false })
      console.log('error')
    }
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
          <option value='padawan'>PADAWAN</option>
        </select>
        <span className={this.state.formComplete.toString()}>ALL FIELDS MUST BE FILLED IN</span>
        <button type='button' onClick={this.handleClick}>LET'S GO</button>
      </form>
    )
  }
};
export default Form;
