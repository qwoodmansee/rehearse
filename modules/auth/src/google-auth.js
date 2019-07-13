import { Google } from 'expo';

const config = {
  iosClientId: '187519984491-61hv6hvufpeiai7sg41rre5ka62e5fs7.apps.googleusercontent.com',
  androidClientId: '187519984491-jlj13hshd2alq5krd1ql08gh87lq0eq2.apps.googleusercontent.com',
  // iosStandaloneAppClientId: '<YOUR_IOS_CLIENT_ID>',
  // androidStandaloneAppClientId: '<YOUR_ANDROID_CLIENT_ID>',
  scopes: ['profile'],
};

export async function SignInWithGoogleAsync() {
  try {
    const { type, accessToken } = await Google.logInAsync(config);
    if (type === 'success') {
      return {
        accessToken,
      };
    } else {
      return {
        cancelled: true,
      };
    }
  } catch (e) {
    return {
      error: true,
    };
  }
}

export async function SignOutWithGoogleAsync({ accessToken }) {
  try {
    await Google.logOutAsync({
      accessToken,
      ...config,
    });
  } catch (e) {
    return {
      error: true,
    };
  }
}
