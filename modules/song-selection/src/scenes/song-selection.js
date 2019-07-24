import AudioPlayer from '@core/src/utils/audio-player';
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

function SongSelection({ navigation }) {
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      await GetSongs({
        shouldDownload: false,
        onComplete: setSongList,
      });
    };
    fetchSongs();
  }, []);

  const onSongSelect = (song) => {
    navigation.navigate('PlayerScene', {
      song,
      audioPlayer: new AudioPlayer(song),
    });
  };

  const onGoogleSettingsSelect = () => {
    navigation.navigate('GoogleSettings');
  };

  const getLocalSongs = async () => {
    await GetSongs({
      shouldDownload: false,
      onComplete: setSongList,
    });
  };

  return (
    <SafeAreaView style={styles.sceneContainer}>
      <ScrollView contentContainerStyle={styles.songListContainer}>
        <RehearseText style={styles.selectSongTitle}>Select Song</RehearseText>
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
      </ScrollView>

      <View contentContainerStyle={styles.googleInteractionsContainer}>
        <RehearseButton
          onPress={() => onGoogleSettingsSelect()}
          style={styles.googleInteractionButton}
        >
          <RehearseText>Sync from Google Drive</RehearseText>
        </RehearseButton>
        <RehearseButton
          onPress={() => getLocalSongs()}
          style={styles.googleInteractionButton}
        >
          <RehearseText>Sync from Local Files</RehearseText>
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
