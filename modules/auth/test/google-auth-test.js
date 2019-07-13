import { SignInWithGoogleAsync, SignOutWithGoogleAsync } from '@auth/src/google-auth';
import { deleteItemAsync, setItemAsync } from 'expo-secure-store';

jest.mock('expo', () => ({
  Google: {
    logInAsync: () => Promise.resolve({
      type: 'success',
      accessToken: 'some_access_token',
    }),
    logOutAsync: () => Promise.resolve({}),
  },
}));

jest.mock('expo-secure-store', () => ({
  setItemAsync: jest.fn(),
  deleteItemAsync: jest.fn(),
  getItemAsync: () => Promise.resolve('stored_access_token'),
}));

describe('GoogleAuth', () => {
  describe('SignInWithGoogleAsync', () => {
    describe('the login is successful', () => {
      it('sets the access token in the secure store', async () => {
        await SignInWithGoogleAsync();
        expect(setItemAsync).toHaveBeenCalledWith('google-access-token', 'some_access_token');
      });
    });
  });

  describe('SignOutWithGoogleAsync', () => {
    it('deletes the access token in the secure store', async () => {
      await SignInWithGoogleAsync();
      await SignOutWithGoogleAsync();
      expect(deleteItemAsync).toHaveBeenCalledWith('google-access-token');
    });
  });
});
