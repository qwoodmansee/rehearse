import Colors from '@theme/src/utils/colors';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import RehearseButton from '@core/src/components/rehearse-button';
import RehearseText from '@core/src/components/rehearse-text';
import SafeAreaView from '@core/src/components/safe-area-view';
import Theme from '@theme/src/utils/theme';
import { AsyncStorage } from 'react-native';
import { GetSongs } from '@song-selection/src/api/google-drive-access';
import { TextInput, View } from 'react-native';
import { createDownloadResumable, deleteAsync, documentDirectory, getInfoAsync, makeDirectoryAsync } from 'expo-file-system';
import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store';
import { withMappedNavigationParams } from 'react-navigation-props-mapper';

function GoogleSettings({
  navigation, onDriveURLUpdated, onSyncSongsPressed, originalDriveUrl,
}) {
  const [downloadingSongs, setDownloadingSongs] = useState(false);
  const [driveUrl, setDriveUrl] = useState(originalDriveUrl);
  const [settingUrl, setSettingUrl] = useState(false);
  const [tempUrlValue, setTempUrlValue] = useState('');
  const handleGetSongs = async () => {
    setDownloadingSongs(true);
    await GetSongs({
      shouldDownload: true,
      googleDriveURL: driveUrl,
    });
    setDownloadingSongs(false);
  };

  const handleDeleteSongs = async () => {
    const songs = await GetSongs({
      shouldDownload: true,
      googleDriveURL: driveUrl,
    });
    if (!!songs && songs.length > 0) {
      await Promise.all(songs.forEach(async (song) => {
        await deleteAsync(song.localDownloadUri);
      }));
    }
    await AsyncStorage.removeItem('SONGS');
  };

  const handleSetDriveUrl = () => {
    setSettingUrl(false);
    setDriveUrl(tempUrlValue);
    onDriveURLUpdated();
  };

  const handleLogout = () => {
    deleteItemAsync('google-access-token');
    navigation.navigate('Home', {});
  };

  return (
    <SafeAreaView style={styles.sceneContainer}>
      <View style={styles.driveInfoContainer}>
        {settingUrl ?
          <>
            <RehearseText style={styles.driveInfoTitle}>Paste in new drive url:</RehearseText>
            <TextInput
              onChangeText={(text) => setTempUrlValue(text)}
              style={styles.driveUrlInput}
              value={tempUrlValue}
            />
          </> :
          <>
            <RehearseText style={styles.driveInfoTitle}>Current Drive Url:</RehearseText>
            <RehearseText style={styles.driveInfoBody}>{driveUrl}</RehearseText>
          </>
        }

      </View>

      <View style={styles.driveInfoContainer}>
        {downloadingSongs && <RehearseText style={styles.driveInfoTitle}>Downloading, please wait...</RehearseText>}
      </View>

      <View>
        {settingUrl ?
          <>
            <RehearseButton
              onPress={() => handleSetDriveUrl()}
              style={styles.googleInteractionButton}
            >
              <RehearseText>Confirm</RehearseText>
            </RehearseButton>
            <RehearseButton
              onPress={() => setSettingUrl(false)}
              style={styles.googleInteractionButton}
            >
              <RehearseText>Cancel</RehearseText>
            </RehearseButton>
          </>
          :
          <>
            <RehearseButton
              onPress={() => setSettingUrl(true)}
              style={styles.googleInteractionButton}
            >
              <RehearseText>Set New Drive URL</RehearseText>
            </RehearseButton>
            <RehearseButton
              onPress={() => handleGetSongs()}
              style={styles.googleInteractionButton}
            >
              <RehearseText>Sync with Drive (Download new songs)</RehearseText>
            </RehearseButton>

            <RehearseButton
              onPress={() => handleDeleteSongs()}
              style={styles.googleInteractionButton}
            >
              <RehearseText>Delete Local Files</RehearseText>
            </RehearseButton>

            <RehearseButton
              onPress={() => handleLogout()}
              style={styles.googleInteractionButton}
            >
              <RehearseText>Log out of Google</RehearseText>
            </RehearseButton>
          </>
        }
      </View>
    </SafeAreaView>
  );
}

GoogleSettings.propTypes = {
  navigation: PropTypes.any,
};

const styles = {
  sceneContainer: {
    backgroundColor: Colors.primary(),
    flex: 1,
  },
  googleInteractionButton: {
    margin: 10,
    backgroundColor: Colors.secondaryLight(),
    borderRadius: 20,
    padding: 10,
  },
  driveInfoContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 3,
  },
  driveInfoTitle: {
    ...Theme.title1(),
    marginBottom: 10,
  },
  driveInfoBody: {
    ...Theme.bodyRegular(),
    marginBottom: 10,
  },
  driveUrlInput: {
    ...Theme.bodyRegular(),
    marginBottom: 10,
    borderColor: Colors.secondaryLight(),
    borderWidth: 1,
    minWidth: '80%',
  },
};

export default withMappedNavigationParams()(GoogleSettings);
