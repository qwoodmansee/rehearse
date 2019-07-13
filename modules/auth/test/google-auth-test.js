import { SignInWithGoogleAsync } from '@auth/src/google-auth';

jest.mock('expo', () => ({
  Google: {
    logInAsync: () => Promise.resolve({
      type: 'success',
      accessToken: 'some_access_token',
    }),
  },
}));

describe('GoogleAuth', () => {
  describe('SignInWithGoogleAsync', () => {
    describe('the login is successful', () => {
      it('returns an accessToken', async () => {
        const result = await SignInWithGoogleAsync();
        console.log(result);
        expect(result.accessToken).toEqual('some_access_token');
      });
    });
  });
});
