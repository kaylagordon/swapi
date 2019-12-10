import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from './MovieCard';
import { shallow } from 'enzyme';

describe('MovieCard', () => {
  let movie = {
    title: 'Die Hard',
    release_date: '1988-07-15',
    characters:['characterURL', 'anotherURL']
  }
  let updateStateWithCharactersMock = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieCard
      key={1}
      movie={movie}
      updateStateWithCharacters={updateStateWithCharactersMock}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should invoke updateStateWithCharacters with movie when button is clicked', () => {
    wrapper.find('button').simulate('click');

    expect(updateStateWithCharactersMock).toHaveBeenCalledWith(movie.characters);
  })
})
