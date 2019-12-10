import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() {
    wrapper = shallow(<App />)

  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state with form information', () => {

  })

  it('should update state with character URLs', () => {

  })

  it('should update state when user logs out', () => {
    
  })
})
