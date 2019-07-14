import PropTypes from 'prop-types';
import React from 'react';
import RehearseText from '@core/src/components/rehearse-text';
import SceneWrapper from '@core/src/components/scene-wrapper';
import Song from '@core/src/models/song';
import SongSelectionButton from '@song-selection/src/components/song-selection-button';
import Theme from '@theme/src/utils/theme';
import { StyleSheet, View } from 'react-native';
import { withMappedNavigationParams } from 'react-navigation-props-mapper';

function SongSelection({ navigation, songs }) {
  const onSongSelect = (song) => {
    navigation.navigate('PlayerScene', {
      song,
    });
  };

  return (
    <SceneWrapper navigation={navigation}>
      <View style={styles.songListContainer}>
        <RehearseText style={styles.selectSongTitle}>Select Song</RehearseText>
        {songs.map((song, i) => {
          return (
            <SongSelectionButton
              key={i}
              onPress={() => onSongSelect(song)}
              songLength={song.songLength}
              songName={song.songName}
              style={styles.songSelectButton}
            />);
        })}
      </View>
    </SceneWrapper>
  );
}

SongSelection.propTypes = {
  navigation: PropTypes.any,
  songs: PropTypes.arrayOf(PropTypes.instanceOf(Song)),
};

const styles = StyleSheet.create({
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
