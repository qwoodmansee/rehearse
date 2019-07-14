import PlayerControls from '@player/src/components/player-controls';
import React from 'react';
import RehearseText from '@core/src/components/rehearse-text';
import SafeAreaView from '@core/src/components/safe-area-view';
import Theme from '@theme/src/utils/theme';
import { ConsistentPlayerControlList } from '@player/test/factories/player-control-factory';
import { View } from 'react-native';

export default function PlayerScene() {
  const playerControls = ConsistentPlayerControlList();

  return (
    <SafeAreaView>
      <View style={styles.playerContainer}>
        <View style={styles.playerTitleContainer}>
          <RehearseText style={styles.playerTitle}>{'<'}</RehearseText>
        </View>
        <View style={styles.songInfoContainer}>
          <RehearseText style={styles.songTitle}>Song Title</RehearseText>
          <RehearseText>Current Practice Point: A</RehearseText>
          <RehearseText>Current Speed: 100%</RehearseText>
        </View>
        <View style={styles.controlsContainer}>
          <RehearseText styles={styles.scrubber}>Scrubber here eventually</RehearseText>
          <PlayerControls controls={playerControls} />
        </View>
      </View>
    </SafeAreaView>
  );
}

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
  playerTitle: {
    ...Theme.title2(),
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
