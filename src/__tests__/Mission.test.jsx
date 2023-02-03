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
        <table><tbody><Mission mission = {mission} /></tbody></table>
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })

  test('should return  Mission Component', () => {
    render(
      <Provider store={store}>
        <table><tbody><Mission mission = {mission} /></tbody></table>
      </Provider>
    );
  })
})

describe('Display Active banner text', () => {
  test('Active banner to display \'Active member\'', () => {
    render(
      <Provider store={store}>
        <table><tbody><Mission mission = {mission2} /></tbody></table>
      </Provider>
    );
    expect(screen.getByText('Active member')).toBeInTheDocument();
  })

  test('Active banner to display \'NOT A MEMBER\'', () => {
    render(
      <Provider store={store}>
        <table><tbody><Mission mission = {mission} /></tbody></table>
      </Provider>
    );
    expect(screen.getByText('Not a member')).toBeInTheDocument();
  })
})
