import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from './MovieCard';
import { shallow } from 'enzyme';

describe('MovieCard', () => {
  let movie = {
    title: 'Die Hard',
    release_date: '1988-07-15'
  }
  it('should match the snapshot', () => {
    const wrapper = shallow(<MovieCard
      key={1}
      movie={movie}
    />)
    expect(wrapper).toMatchSnapshot();
    })
})
