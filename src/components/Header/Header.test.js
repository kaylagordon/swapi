import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  const logOutMock = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header
      heading='Heading text'
      showHomeButton={true}
      logOut={logOutMock}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should invoke logOut when button is clicked', () => {
    wrapper.find('.logout-button').simulate('click');

    expect(logOutMock).toHaveBeenCalled();
  })
})
