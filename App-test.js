import App from '@root/App.js';
import React from 'react';
import { render } from '@testing-library/react-native';

jest.mock('@navigation/src/components/navigator', () => 'Navigator');

describe('App', () => {
  describe('using a mocked navigator', () => {
    it('renders the mocked app', () => {
      const { baseElement } = render(<App />);
      expect(baseElement).toMatchSnapshot();
    });
  });
});
