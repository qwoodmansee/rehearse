import Colors from '@theme/src/utils/colors';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import RehearseButton from '@core/src/components/rehearse-button';
import RehearseText from '@core/src/components/rehearse-text';
import SafeAreaView from '@core/src/components/safe-area-view';
import Theme from '@theme/src/utils/theme';
import { SignInWithGoogleAsync, SignOutWithGoogleAsync } from '@auth/src/google-auth';
import { StyleSheet, View } from 'react-native';
import { getItemAsync } from 'expo-secure-store';
import { withMappedNavigationParams } from 'react-navigation-props-mapper';

function HomeScreen({ navigation }) {
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
    setIsSignedIn(false);
  };

  const continueToSongSelection = () => {
    navigation.navigate('SongSelection', {});
  };

  return (
    <SafeAreaView style={styles.sceneContainer}>
      <View style={styles.appNameContainer}>
        <RehearseText style={styles.appName}>rehearse.</RehearseText>
      </View>
      <View style={styles.buttonContainer}>
        {isSignedIn ? (
          <>
            <RehearseButton
              onPress={continueToSongSelection}
              style={styles.button}
            >
              <RehearseText>Looks Like You are Signed In. Continue?</RehearseText>
            </RehearseButton>
            <RehearseButton
              onPress={handleSignOut}
              style={styles.button}
            >
              <RehearseText>I don&apos;t think that&apos;s right...</RehearseText>
            </RehearseButton>
          </>
        )
          : (
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

HomeScreen.propTypes = {
  navigation: PropTypes.any,
};

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
    margin: 10,
  },
});

export default withMappedNavigationParams()(HomeScreen);
