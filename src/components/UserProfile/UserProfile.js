import React from 'react';
import './UserProfile.css';

function UserProfile({ name, favoriteQuote, ranking }) {
  return (
    <section className='user-profile'>
      <h2>{name}</h2>
      <h3>{ranking}</h3>
      <p>{favoriteQuote}</p>
    </section>
  );
}

export default UserProfile;
