import React from 'react';
import deathStar from '../../images/death-star.png';
import './Header.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Header({ heading, showHomeButton, logOut }) {
  return (
    <header>
      <div className='header-black-box'>x</div>
      <div className='death-star-container'>
        <img src={deathStar} alt='death star'/>
      </div>
      <div className='heading-line'>
        <h1>{heading}</h1>
        {
          showHomeButton ?
          <Link to='/'><button className='logout-button' onClick={() => logOut()}>LOG OUT</button></Link> :
          <></>
        }
      </div>
    </header>
  );
}

Header.propTypes = {
  heading: PropTypes.string,
  showHomeButton: PropTypes.bool,
  logOut: PropTypes.func
}

export default Header;
