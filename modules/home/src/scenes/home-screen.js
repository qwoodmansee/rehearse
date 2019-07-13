import Colors from '@theme/src/utils/colors';
import React, { useState } from 'react';
import RehearseButton from '@core/src/components/rehearse-button';
import RehearseText from '@core/src/components/rehearse-text';
import Theme from '@theme/src/utils/theme';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { SignInWithGoogleAsync, SignOutWithGoogleAsync } from '@auth/src/google-auth';

export default function HomeScreen() {
  const [accessToken, setAccessToken] = useState();

  const handleSignIn = async () => {
    const result = await SignInWithGoogleAsync();
    if (result.accessToken) { setAccessToken(result.accessToken); }
  };

  const handleSignOut = () => {
    SignOutWithGoogleAsync(accessToken);
    setAccessToken(undefined);
  };

  return (
    <SafeAreaView style={styles.sceneContainer}>
      <View style={styles.appNameContainer}>
        <RehearseText style={styles.appName}>rehearse.</RehearseText>
      </View>
      <View style={styles.buttonContainer}>
        {accessToken ? (
          <RehearseButton
            onPress={handleSignOut}
            style={styles.button}
          >
            <RehearseText>Sign Out</RehearseText>
          </RehearseButton>
        ) : (
          <RehearseButton
            onPress={handleSignIn}
            style={styles.button}
          >
            <RehearseText>Sign In With Google</RehearseText>
          </RehearseButton>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: Colors.primary(),
    flex: 1,
  },
  appNameContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  appName: {
    ...Theme.title1(),
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Colors.secondaryLight(),
    borderRadius: 20,
    justifyContent: 'center',
    padding: 10,
  },
});
