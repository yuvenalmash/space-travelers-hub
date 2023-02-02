import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Mission from '../components/missions/Mission';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';

const mission = {mission_id: '1', mission_name: 'Thaicom', description: 'description', joined: false}

describe('Display mission component', () => {
  test('it matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Mission mission = {mission} />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })

  test('should return  Mission Component', () => {
    render(
      <Provider store={store}>
        <Mission mission = {mission} />
      </Provider>
    );
  })
})
