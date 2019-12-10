import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)

  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state with form information', () => {
    wrapper.instance().updateStateFromForm('kayla', 'pants are cool', 'padawon');

    expect(wrapper.state()).toEqual({
      loggedIn: true,
      name: 'kayla',
      favoriteQuote: 'pants are cool',
      ranking: 'padawon',
      characterURLs: [],
      movies: []
    })
  })

  it('should update state with the first 10 character URLs', () => {
    let characters = ['URL1', 'URL2', 'URL3', 'URL4', 'URL5', 'URL6', 'URL7', 'URL8', 'URL9', 'URL10', 'URL11']

    wrapper.instance().updateStateWithCharacters(characters);

    expect(wrapper.state('characterURLs')).toEqual(['URL1', 'URL2', 'URL3', 'URL4', 'URL5', 'URL6', 'URL7', 'URL8', 'URL9', 'URL10']);
  })

  it('should update state when user logs out', () => {
    wrapper.setState({ loggedIn: true })
    wrapper.instance().logOut();

    expect(wrapper.state('loggedIn')).toEqual(false)
  })
})
