import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Rocket from '../components/rockets/Rocket';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';
import '@testing-library/jest-dom'

const rocket = {id: '1', name: 'falcon1', description: 'description', reserved: false, flickr_images: ['img1', 'img2']}
const rocket2 = {id: '1', name: 'falcon1', description: 'description', reserved: true, flickr_images: ['img1', 'img2']}

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


describe('Display Reserved banner', () => {
  test('reserved banner displayed when reserved', async() => {
    render(
      <Provider store={store}>
        <Rocket rocket = {rocket2} />
      </Provider>
    );
    await screen.findByText('Reserved')
    expect(screen.getByText('Reserved')).toBeInTheDocument();
  })

  test('reserved banner not displayed', async() => {
    render(
      <Provider store={store}>
        <Rocket rocket = {rocket} />
      </Provider>
    );
    expect(() => screen.getByText('Reserved')).toThrow();
  })
})
