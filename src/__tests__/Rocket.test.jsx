import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Rocket from '../components/rockets/Rocket';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';

const rocket = {id: '1', name: 'falcon1', description: 'description', reserved: false}
describe('Display Rocket component', () => {
  test('it matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Rocket rocket = {rocket} />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('should return  Rocket Component', () => {
    render(
      <Provider store={store}>
        <Rocket rocket = {rocket} />
      </Provider>
    );
  });
})
