import Colors from '@theme/src/utils/colors';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import RehearseButton from '@core/src/components/rehearse-button';
import RehearseText from '@core/src/components/rehearse-text';
import SafeAreaView from '@core/src/components/safe-area-view';
import Theme from '@theme/src/utils/theme';
import { RandomSongList } from '@song-selection/test/factories/song-list-factory';
import { SignInWithGoogleAsync } from '@auth/src/google-auth';
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

  const continueToSongSelection = () => {
    // const songs = RandomSongList(6);
    const songs = [];
    navigation.navigate('SongSelection', {
      songs,
    });
  };

  return (
    <SafeAreaView style={styles.sceneContainer}>
      <View style={styles.appNameContainer}>
        <RehearseText style={styles.appName}>rehearse.</RehearseText>
      </View>
      <View style={styles.buttonContainer}>
        {isSignedIn ? continueToSongSelection() : (
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
  },
});

export default withMappedNavigationParams()(HomeScreen);
