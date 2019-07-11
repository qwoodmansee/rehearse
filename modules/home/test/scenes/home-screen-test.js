import HomeScreen from '@home/src/scenes/home-screen';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Homescreen', () => {
  it('should render the welcome message', () => {
    const tree = renderer.create(<HomeScreen />).toJSON();
    const stringTree = JSON.stringify(tree);
    expect(stringTree).toEqual(expect.stringContaining('working on your app!'));
  });
});
