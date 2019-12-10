import React from 'react';
import ReactDOM from 'react-dom';
import CharacterContainer from './CharacterContainer';
import { shallow } from 'enzyme';

describe('CharacterContainer', () => {
  let characterURLs = ['url1', 'url2']
  it('should match the snapshot', () => {
    const wrapper = shallow(<CharacterContainer
      characterURLs={characterURLs}
    />)
    expect(wrapper).toMatchSnapshot();
    })
})
