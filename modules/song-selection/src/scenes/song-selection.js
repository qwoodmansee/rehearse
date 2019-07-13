import Colors from '@theme/src/utils/colors';
import PropTypes from 'prop-types';
import React from 'react';
import RehearseText from '@core/src/components/rehearse-text';
import SafeAreaView from '@core/src/components/safe-area-view';
import Song from '@core/src/models/song';
import SongSelectionButton from '@song-selection/src/components/song-selection-button';
import Theme from '@theme/src/utils/theme';
import { StyleSheet, View } from 'react-native';
import { withMappedNavigationParams } from 'react-navigation-props-mapper';

function SongSelection({ songs }) {
  return (
    <SafeAreaView style={styles.sceneContainer}>
      <View style={styles.songListContainer}>
        <RehearseText style={styles.selectSongTitle}>Select Song</RehearseText>
        {songs.map((song, i) => {
          return (
            <SongSelectionButton
              key={i}
              onPress={() => {}}
              songLength={song.songLength}
              songName={song.songName}
              style={styles.songSelectButton}
            />);
        })}
      </View>
    </SafeAreaView>
  );
}

SongSelection.propTypes = {
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
});

export default withMappedNavigationParams()(SongSelection);
