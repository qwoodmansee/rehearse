import React from 'react';
import SafeAreaView from '@core/src/components/safe-area-view';
import { Platform, StatusBar } from 'react-native';
import { render } from '@testing-library/react-native';

jest.mock('Platform');
jest.mock('StatusBar');

describe('SafeAreaView', () => {
  describe('on Android', () => {
    beforeEach(() => {
      Platform.OS = 'android';
      StatusBar.currentHeight = 30;
    });

    it('adds padding', () => {
      const wrapper = render(<SafeAreaView />);

      expect(wrapper.getByTestId('SafeAreaView').props.style.paddingTop).toBe(30);
    });
  });

  describe('on iOS', () => {
    beforeEach(() => {
      Platform.OS = 'ios';
      StatusBar.currentHeight = 30;
    });

    it('does not add padding', () => {
      const wrapper = render(<SafeAreaView />);

      expect(wrapper.getByTestId('SafeAreaView').props.style.paddingTop).toBeUndefined();
    });
  });
});
