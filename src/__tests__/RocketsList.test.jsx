import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import RocketsList from '../components/rockets/RocketsList';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';

describe('Display RocketsList component', () => {
  test('it matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <RocketsList />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })

  test('should return  RocketsLIst Component', () => {
    render(
      <Provider store={store}>
        <RocketsList />
      </Provider>
    );
  })
})
