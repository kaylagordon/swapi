import React from 'react';
import ReactDOM from 'react-dom';
import UserProfile from './UserProfile';
import { shallow } from 'enzyme';

describe('UserProfile', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<UserProfile />)
    expect(wrapper).toMatchSnapshot();
    })
})
