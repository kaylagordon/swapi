import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Form />)
    expect(wrapper).toMatchSnapshot();
    })
})
