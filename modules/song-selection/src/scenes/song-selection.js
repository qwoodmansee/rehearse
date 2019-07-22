import Colors from '@theme/src/utils/colors';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import RehearseButton from '@core/src/components/rehearse-button';
import RehearseText from '@core/src/components/rehearse-text';
import SafeAreaView from '@core/src/components/safe-area-view';
import Song from '@core/src/models/song';
import SongSelectionButton from '@song-selection/src/components/song-selection-button';
import Theme from '@theme/src/utils/theme';
import { GetSongs } from '@song-selection/src/api/google-drive-access';
import { ScrollView, StyleSheet, View } from 'react-native';
import { withMappedNavigationParams } from 'react-navigation-props-mapper';

function SongSelection({ songs, navigation }) {
  const [songList, setSongList] = useState(songs);
  const [downloadingSongs, setDownloadingSongs] = useState(false);
  const [driveUrl, setDriveUrl] = useState('https://drive.google.com/open?id=1wYdxpc_4-VJDuXiQSU4_NPVKoVqlTUtU');

  useEffect(() => {
    const fetchSongs = async () => {
      const downloadedSongs = await GetSongs({
        shouldDownload: false,
        googleDriveURL: driveUrl,
      });
      setSongList(downloadedSongs);
    };
    fetchSongs();
  }, [driveUrl, downloadingSongs]);

  const onSongSelect = (song) => {
    navigation.navigate('PlayerScene', {
      song,
    });
  };

  const onGoogleSettingsSelect = () => {
    navigation.navigate('GoogleSettings', {
      originalDriveUrl: driveUrl,
    });
  };

  return (
    <SafeAreaView style={styles.sceneContainer}>
      <ScrollView contentContainerStyle={styles.songListContainer}>
        <RehearseText style={styles.selectSongTitle}>Select Song</RehearseText>
        {songList.map((song, i) => {
          console.log(song);
          return (
            <SongSelectionButton
              key={i}
              onPress={() => onSongSelect(song)}
              songLength={song.songLength}
              songName={song.songName}
              style={styles.songSelectButton}
            />);
        })}
        {downloadingSongs &&
          <RehearseText>Downloading...</RehearseText>
        }
      </ScrollView>

      <View contentContainerStyle={styles.googleInteractionsContainer}>
        <RehearseButton
          onPress={() => onGoogleSettingsSelect()}
          style={styles.googleInteractionButton}
        >
          <RehearseText>Sync from Google Drive</RehearseText>
        </RehearseButton>
      </View>
    </SafeAreaView>
  );
}

SongSelection.propTypes = {
  navigation: PropTypes.any,
  songs: PropTypes.arrayOf(PropTypes.instanceOf(Song)),
};

const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: Colors.primary(),
    flex: 1,
  },
  songListContainer: {
    alignItems: 'center',
  },
  selectSongTitle: {
    ...Theme.title2(),
  },
  songSelectButton: {
    margin: 10,
  },
  googleInteractionsContainer: {},
  googleInteractionButton: {
    margin: 10,
    backgroundColor: Colors.secondaryLight(),
    borderRadius: 20,
    padding: 10,
  },
});

export default withMappedNavigationParams()(SongSelection);
