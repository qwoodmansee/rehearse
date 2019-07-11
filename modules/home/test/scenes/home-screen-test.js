import HomeScreen from '@home/src/scenes/home-screen';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Homescreen', () => {
  it('should render the welcome message', () => {
    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree).stringContaining('working on your app!');
  })
});