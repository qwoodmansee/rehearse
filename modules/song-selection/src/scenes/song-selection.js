import Colors from '@theme/src/utils/colors';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import RehearseButton from '@core/src/components/rehearse-button';
import RehearseText from '@core/src/components/rehearse-text';
import SafeAreaView from '@core/src/components/safe-area-view';
import Song from '@core/src/models/song';
import SongSelectionButton from '@song-selection/src/components/song-selection-button';
import Theme from '@theme/src/utils/theme';
import { GetSongs } from '@song-selection/src/api/google-drive-access';
import { StyleSheet, View } from 'react-native';
import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store';
import { withMappedNavigationParams } from 'react-navigation-props-mapper';

function SongSelection({ songs, navigation }) {
  const [songList, setSongList] = useState(songs);
  const [downloadingSongs, setDownloadingSongs] = useState(false);
  const [driveUrl, setDriveUrl] = useState('https://drive.google.com/open?id=1wYdxpc_4-VJDuXiQSU4_NPVKoVqlTUtU');

  const handleGetSongs = async () => {
    setDownloadingSongs(true);
    const downloadedSongs = await GetSongs(driveUrl);
    setSongList(downloadedSongs);
    setDownloadingSongs(false);
  };

  const onSongSelect = (song) => {
    navigation.navigate('PlayerScene', {
      song,
    });
  };

  return (
    <SafeAreaView style={styles.sceneContainer}>
      <View style={styles.songListContainer}>
        <RehearseText style={styles.selectSongTitle}>Select Song</RehearseText>
        <RehearseText>Current Drive Url:</RehearseText>
        <RehearseText>{driveUrl}</RehearseText>
        <RehearseButton
          onPress={() => handleGetSongs()}
          style={styles.getSongsButton}
        ><RehearseText>Attempt to get songs!</RehearseText>
        </RehearseButton>
        <RehearseButton
          onPress={() => deleteItemAsync('google-access-token')}
          style={styles.getSongsButton}
        ><RehearseText>Log out of google</RehearseText>
        </RehearseButton>
        {songList.map((song, i) => {
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
  getSongsButton: {
    margin: 10,
    position: 'relative',
    backgroundColor: Colors.secondaryLight(),
    borderRadius: 20,
    padding: 10,
    width: '90%',
  },
});

export default withMappedNavigationParams()(SongSelection);
