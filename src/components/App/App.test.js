import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should match the snapshot with the favorited class', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot();
    })
})
