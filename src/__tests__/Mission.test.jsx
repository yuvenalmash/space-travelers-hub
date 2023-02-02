import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Mission from '../components/missions/Mission';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';

const mission = {mission_id: '1', mission_name: 'Thaicom', description: 'description', joined: false}
const mission2 = {mission_id: '1', mission_name: 'Thaicom', description: 'description', joined: true}

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

describe('Display Active banner text', () => {
  test('Active banner to display \'Active member\'', () => {
    render(
      <Provider store={store}>
        <Mission mission = {mission2} />
      </Provider>
    );
    expect(screen.getByText('Active member')).toBeInTheDocument();
  })

  test('Active banner to display \'NOT A MEMBER\'', () => {
    render(
      <Provider store={store}>
        <Mission mission = {mission} />
      </Provider>
    );
    expect(screen.getByText('Not a member')).toBeInTheDocument();
  })
})
