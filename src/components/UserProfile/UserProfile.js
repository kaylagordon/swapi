import React from 'react';
import './UserProfile.css';
import PropTypes from 'prop-types';

function UserProfile({ name, favoriteQuote, ranking }) {
  return (
    <section className='user-profile'>
      <h2>{name}</h2>
      <h3>{ranking}</h3>
      <p>{favoriteQuote}</p>
    </section>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string,
  favoriteQuote: PropTypes.string,
  ranking: PropTypes.string
}

export default UserProfile;
