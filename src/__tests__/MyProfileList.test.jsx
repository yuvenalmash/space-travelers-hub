import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import MyProfileLists from '../components/myProfile/MyProfileLists';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';


describe('Display myProfileList component', () => {
  test('it matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MyProfileLists />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })

  test('should return  MyProfileList Component', () => {
    render(
      <Provider store={store}>
        <MyProfileLists />
      </Provider>
    );
  })
})
