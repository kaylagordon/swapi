import React from 'react';
import ReactDOM from 'react-dom';
import MovieContainer from './MovieContainer';
import { shallow } from 'enzyme';

describe('MovieContainer', () => {
  let movies = [
    {name: 'Titanic', episode_id: 1, characters: ['url1', 'url2']},
    {name: 'Alien', episode_id: 2, characters: ['url1', 'url2']},
    {name: 'Robocop', episode_id: 3, characters: ['url1', 'url2']}
  ]
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieContainer
      movies={movies}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
