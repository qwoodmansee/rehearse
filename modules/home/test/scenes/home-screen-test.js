import HomeScreen from '@home/src/scenes/home-screen';
import React from 'react';
import { render } from '@testing-library/react-native';

describe('Homescreen', () => {
  it('should render the title of the app', () => {
    const { getByText } = render(<HomeScreen />);
    getByText('rehearse.');
  });

  it('contain a call to action to move forward in the app', () => {
    const { getByText } = render(<HomeScreen />);
    getByText('Continue');
  });
});
