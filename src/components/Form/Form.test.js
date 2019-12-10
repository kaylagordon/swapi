import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { shallow } from 'enzyme';

describe('App', () => {
  const updateStateFromFormMock = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Form
      updateStateFromForm={updateStateFromFormMock}
    />)
    wrapper.setState({
      name: 'Kayla',
      favoriteQuote: 'Titanic is better',
      ranking: 'jedi-master',
      formComplete: 'hide'
    })
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should invoke updateStateFromForm if form is filled out', () => {
    wrapper.instance().validateForm();

    expect(updateStateFromFormMock).toHaveBeenCalledWith('Kayla', 'Titanic is better', 'jedi-master');
  })

  it('should change state of formComplete to show if form is not filled out', () => {
    wrapper.setState({
      name: '',
      favoriteQuote: 'Titanic is better',
      ranking: 'jedi-master',
      formComplete: 'hide'
    })

    wrapper.instance().validateForm();

    expect(wrapper.state('formComplete')).toEqual('show');
  })

  it('should update state when form inputs are changed', () => {
    const event = {
      target: {
        name: 'name',
        value: 'Billy'
      }
    }

    wrapper.instance().updateUserInfo(event)
    expect(wrapper.state('name')).toEqual('Billy');
  })
})
