import React from 'react';
import ReactDOM from 'react-dom';
import UserProfile from './UserProfile';
import { shallow } from 'enzyme';

describe('UserProfile', () => {
  let user = {
    name: 'Bruce',
    favoriteQuote: 'something Yoda says',
    ranking: 'jedi-master'
  }
  it('should match the snapshot', () => {
    const wrapper = shallow(<UserProfile
      user={user}
    />)
    expect(wrapper).toMatchSnapshot();
    })
})
