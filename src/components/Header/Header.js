import React from 'react';
import deathStar from '../../images/death-star.png';
import './Header.css';
import { Link } from 'react-router-dom';

function Header({ heading, showHomeButton, logOut }) {
  return (
    <header>
      <div className='header-black-box'>x</div>
      <div className='death-star-container'>
        <img src={deathStar}/>
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

export default Header;
