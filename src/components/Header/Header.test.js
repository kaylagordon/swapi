import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should match the snapshot with the favorited class', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot();
    })
})
