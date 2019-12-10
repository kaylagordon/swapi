import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import { shallow } from 'enzyme';

describe('Loader', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Loader />)
    expect(wrapper).toMatchSnapshot();
    })
})
