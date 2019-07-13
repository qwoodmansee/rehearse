import Colors from '@theme/src/utils/colors';
import PropTypes from 'prop-types';
import React from 'react';
import RehearseText from '@core/src/components/rehearse-text';
import SongSelectionButton from '@song-selection/src/components/song-selection-button';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export default function SongSelection({ songs }) {
  return (
    <SafeAreaView style={styles.sceneContainer}>
      <View style={styles.songListContainer}>
        <RehearseText>Select Song</RehearseText>
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
  songs: PropTypes.arrayOf(PropTypes.shape({
    songName: PropTypes.string,
    songLength: PropTypes.number,
  })),
};

const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: Colors.primary(),
    flex: 1,
  },
  songListContainer: {
    alignItems: 'center',
  },
  songSelectButton: {
    margin: 10,
  },
});
