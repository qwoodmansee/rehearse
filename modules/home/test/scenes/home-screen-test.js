import HomeScreen from '@home/src/scenes/home-screen';
import React from 'react';
import { render } from '@testing-library/react-native';

describe('Homescreen', () => {
  it('should render the welcome message', () => {
    const { getByText } = render(<HomeScreen />);
    getByText('Open up home-screen.js to start working on your app!');
  });
});
