import React from 'react';
import deathStar from '../../images/death-star.png';
import './Loader.css'

const Loader = () => (
<div className='loader-container'>
  <img src={deathStar} className="loader-image" alt="deathStar" />
  <p className='loader-text'>loading...</p>
</div>
)

export default Loader;
