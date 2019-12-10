import React, { Component } from 'react';
import './Form.css';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      favoriteQuote: '',
      ranking: 'jedi-master',
      formComplete: 'hide'
    }
  }

  updateUserInfo = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  validateForm = () => {
    if(this.state.name && this.state.favoriteQuote && this.state.ranking) {
      this.setState({ formComplete: 'hide' });
      this.props.updateStateFromForm(this.state.name, this.state.favoriteQuote, this.state.ranking);
    } else {
      this.setState({ formComplete: 'show' })
    }
  }

  render() {
    return (
      <form>
        <label for='name' className='form-text'>WHAT IS YOUR FIRST NAME?</label>
        <input
          type='text'
          name='name'
          id='name'
          value={this.state.name}
          onChange={this.updateUserInfo}
        />
        <label for='quote' className='form-text'>WHAT IS YOUR FAVORITE STAR WARS QUOTE?</label>
        <input
          type='text'
          name='favoriteQuote'
          id='quote'
          value={this.state.favoriteQuote}
          onChange={this.updateUserInfo}
        />
        <label for='ranking' className='form-text'>HOW WELL DO YOU KNOW STAR WARS?</label>
        <select
          name='ranking'
          id='ranking'
          value={this.state.ranking}
          onChange={this.updateUserInfo}
        >
          <option value='jedi-master'>JEDI MASTER</option>
          <option value='jedi-knight'>JEDI KNIGHT</option>
          <option value='padawan'>PADAWAN</option>
        </select>
        <span className={this.state.formComplete.toString()}>ALL FIELDS MUST BE FILLED IN</span>
        <button type='button' onClick={this.validateForm}>LET'S GO</button>
      </form>
    )
  }
};

Form.propTypes = {
  updateStateFromForm: PropTypes.func
}

export default Form;
