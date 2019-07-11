import App from '@root/App.js';
import React from 'react';
import renderer from 'react-test-renderer';

jest.mock('@navigation/src/components/navigator', () => 'Navigator');

describe('App', () => {
  describe('using a mocked navigator', () => {
    it('renders the mocked app', () => {
      const tree = renderer.create(<App />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
