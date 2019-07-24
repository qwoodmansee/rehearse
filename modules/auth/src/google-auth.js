import { Google } from 'expo';
import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store';

const config = {
  iosClientId: '187519984491-61hv6hvufpeiai7sg41rre5ka62e5fs7.apps.googleusercontent.com',
  androidClientId: '187519984491-jlj13hshd2alq5krd1ql08gh87lq0eq2.apps.googleusercontent.com',
  iosStandaloneAppClientId: 'com.googleusercontent.apps.187519984491-e2qltod32b04uobtmk32sipat8ln8q2e',
  androidStandaloneAppClientId: '187519984491-nbnu947pglvrabpcgijum63e69adfv6e.apps.googleusercontent.com',
  scopes: ['profile', 'https://www.googleapis.com/auth/drive.readonly'],
};

export async function SignInWithGoogleAsync() {
  try {
    const { type, accessToken } = await Google.logInAsync(config);
    if (type === 'success') {
      await setItemAsync('google-access-token', accessToken);
      return {
        success: true,
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

export async function SignOutWithGoogleAsync() {
  const accessToken = await getItemAsync('google-access-token');
  try {
    await Google.logOutAsync({
      accessToken,
      ...config,
    });
    await deleteItemAsync('google-access-token');
  } catch (e) {
    return {
      error: true,
    };
  }
}
