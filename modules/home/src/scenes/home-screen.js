import Colors from '@theme/src/utils/colors';
import React, { useEffect, useState } from 'react';
import RehearseButton from '@core/src/components/rehearse-button';
import RehearseText from '@core/src/components/rehearse-text';
import Theme from '@theme/src/utils/theme';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { SignInWithGoogleAsync, SignOutWithGoogleAsync } from '@auth/src/google-auth';
import { getItemAsync } from 'expo-secure-store';

export default function HomeScreen() {
  const [isSignedIn, setIsSignedIn] = useState();

  useEffect(() => {
    const fetchAccessToken = async () => {
      const accessToken = await getItemAsync('google-access-token');
      setIsSignedIn(!!accessToken);
    };
    fetchAccessToken();
  }, []);

  const handleSignIn = async () => {
    await SignInWithGoogleAsync();
    const accessToken = await getItemAsync('google-access-token');
    setIsSignedIn(!!accessToken);
  };

  const handleSignOut = async () => {
    await SignOutWithGoogleAsync();
    const accessToken = await getItemAsync('google-access-token');
    setIsSignedIn(!!accessToken);
  };

  return (
    <SafeAreaView style={styles.sceneContainer}>
      <View style={styles.appNameContainer}>
        <RehearseText style={styles.appName}>rehearse.</RehearseText>
      </View>
      <View style={styles.buttonContainer}>
        {isSignedIn ? (
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
