import React from 'react';
import deathStar from '../../images/death-star.png';
import './Header.css';

function Header() {
  return (
    <header>
      <div className='header-black-box'>x</div>
      <div className='death-star-container'>
        <img src={deathStar}/>
      </div>
      <h1>WELCOME, YOUNG JEDI</h1>
    </header>
  );
}

export default Header;
