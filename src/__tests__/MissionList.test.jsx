import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import MissionsList from '../components/missions/MissionList';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';

describe('Display missionsList component', () => {
  test('it matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MissionsList />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })

  test('should return  MissionsLIst Component', () => {
    render(
      <Provider store={store}>
        <MissionsList />
      </Provider>
    );
  })
})
