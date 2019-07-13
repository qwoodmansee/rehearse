import HomeScreen from '@home/src/scenes/home-screen';
import React from 'react';
import { SignInWithGoogleAsync } from '@auth/src/google-auth';
import { act, fireEvent, render, wait } from '@testing-library/react-native';

jest.mock('@auth/src/google-auth', () => ({
  SignInWithGoogleAsync: jest.fn(),
}));

jest.mock('expo-secure-store', () => ({
  getItemAsync: () => {
    return Promise.resolve(null);
  },
}));

describe('Homescreen', () => {
  it('renders the title of the app', () => {
    jest.useFakeTimers();
    const { getByText } = render(<HomeScreen />);
    act(() => {
      jest.runAllTimers();
    });
    getByText('rehearse.');
  });

  describe('when the user is signed out', () => {
    it('renders the sign in button', async () => {
      jest.useFakeTimers();
      const { getByText } = render(<HomeScreen />);
      act(() => {
        jest.runAllTimers();
      });
      await wait(() => getByText('Sign In With Google'));
    });

    describe('when the user clicks the sign in button', () => {
      it('allows the user to sign in', () => {
        jest.useFakeTimers();
        const { getByText } = render(<HomeScreen />);

        act(() => {
          jest.runAllTimers();
        });

        fireEvent.press(getByText('Sign In With Google'));

        act(() => {
          jest.runAllTimers();
        });

        expect(SignInWithGoogleAsync).toHaveBeenCalled();
      });
    });
  });
});
