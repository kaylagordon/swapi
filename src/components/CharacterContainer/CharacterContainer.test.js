import React from 'react';
import ReactDOM from 'react-dom';
import CharacterContainer from './CharacterContainer';
import CharacterCard from '../CharacterCard/CharacterCard';

import { shallow } from 'enzyme';

describe('CharacterContainer', () => {
  let characterURLs = ['url1', 'url2']
  let wrapper;
  let character1 = {
    films: ['URL', 'anotherURL'],
    homeworld: 'URL',
    species: 'URL',
    name: 'Billy'
  }
  let character2 = {
    films: ['URL', 'anotherURL'],
    homeworld: 'URL',
    species: 'URL',
    name: 'Bob'
  }

  beforeEach(() => {
    wrapper = shallow(<CharacterContainer
      characterURLs={characterURLs}
    />)

    wrapper.setState({
      isLoading: false,
      characters: [character1, character2]
    })
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should render CharacterCards with correct information', () => {
    expect(wrapper.instance().renderCards().length).toEqual(2);
  })

})
