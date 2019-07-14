import PlayerControls from '@player/src/components/player-controls';
import PropTypes from 'prop-types';
import React from 'react';
import RehearseText from '@core/src/components/rehearse-text';
import SceneWrapper from '@core/src/components/scene-wrapper';
import Song from '@core/src/models/song';
import Theme from '@theme/src/utils/theme';
import { ConsistentPlayerControlList } from '@player/test/factories/player-control-factory';
import { View } from 'react-native';
import { withMappedNavigationParams } from 'react-navigation-props-mapper';

function PlayerScene({ navigation, song }) {
  const playerControls = ConsistentPlayerControlList();

  return (
    <SceneWrapper navigation={navigation}>
      <View style={styles.playerContainer}>
        <View style={styles.songInfoContainer}>
          <RehearseText style={styles.songTitle}>{song.songName}</RehearseText>
          <RehearseText>Current Practice Point: A</RehearseText>
          <RehearseText>Current Speed: 100%</RehearseText>
        </View>
        <View style={styles.controlsContainer}>
          <RehearseText styles={styles.scrubber}>Scrubber here eventually</RehearseText>
          <PlayerControls controls={playerControls} />
        </View>
      </View>
    </SceneWrapper>
  );
}

PlayerScene.propTypes = {
  navigation: PropTypes.any,
  song: PropTypes.instanceOf(Song),
};

const styles = {
  playerContainer: {
    flexDirection: 'column',
    minHeight: '100%',
  },
  playerTitleContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
    flex: 1,
  },
  songInfoContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 3,
  },
  songTitle: {
    ...Theme.title1(),
    marginBottom: 10,
  },
  scrubber: {},
  controlsContainer: {
    flex: 4,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginBottom: 40,
  },
};

export default withMappedNavigationParams()(PlayerScene);
