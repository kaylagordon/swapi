import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <form>
        <p className='form-text'>WHAT IS YOUR FIRST NAME?</p>
        <input type='textbox' value=''/>
        <p className='form-text'>WHAT IS YOUR FAVORITE STAR WARS QUOTE?</p>
        <input type='textbox' value=''/>
        <p className='form-text'>HOW WELL DO YOU KNOW STAR WARS?</p>
        <select>
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
