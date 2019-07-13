import HomeScreen from '@home/src/scenes/home-screen';
import React from 'react';
import { act, fireEvent, render, wait } from '@testing-library/react-native';

jest.mock('@auth/src/google-auth', () => ({
  SignInWithGoogleAsync: () => Promise.resolve({
    accessToken: 'some_access_token',
  }),
  SignOutWithGoogleAsync: () => Promise.resolve({}),
}));

describe('Homescreen', () => {
  it('should render the title of the app', () => {
    const { getByText } = render(<HomeScreen />);
    getByText('rehearse.');
  });

  describe('when the google login button is clicked and the login succeeds', () => {
    it('calls the sign in with google method', async () => {
      jest.useFakeTimers();
      const { getByText } = render(<HomeScreen />);

      fireEvent.press(getByText('Sign In With Google'));
      act(() => {
        jest.runAllTimers();
      });

      await wait(() => getByText('Sign Out'));
    });
  });
});
