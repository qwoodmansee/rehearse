import AudioPlayer from '@player/src/utils/audio-player';
import Colors from '@theme/src/utils/colors';
import PlayerControls from '@player/src/components/player-controls';
import PropTypes from 'prop-types';
import React from 'react';
import RealPlayerControls from '@player/src/utils/real-player-controls';
import RehearseText from '@core/src/components/rehearse-text';
import SafeAreaView from '@core/src/components/safe-area-view';
import Song from '@core/src/models/song';
import Theme from '@theme/src/utils/theme';
import { Slider } from 'react-native';
import { View } from 'react-native';
import { withMappedNavigationParams } from 'react-navigation-props-mapper';

function PlayerScene({ navigation, song }) {
  const audioPlayer = new AudioPlayer(song);
  return (
    <SafeAreaView style={styles.sceneContainer}>
      <View style={styles.playerContainer}>
        <View style={styles.playerTitleContainer}>
          <RehearseText
            onPress={() => {
              audioPlayer.stop();
              navigation.goBack();
            }}
            style={styles.playerTitle}
          >{'<'}
          </RehearseText>
        </View>
        <View style={styles.songInfoContainer}>
          <RehearseText style={styles.songTitle}>{song.songName}</RehearseText>
        </View>
        <View style={styles.controlsContainer}>
          <Slider
            maximumTrackTintColor={Colors.secondaryDark()}
            maximumValue={1}
            minimumTrackTintColor={Colors.secondaryLight()}
            minimumValue={0}
            style={styles.scrubber}
          />
          <PlayerControls controls={RealPlayerControls(audioPlayer)} />
        </View>
      </View>
    </SafeAreaView>
  );
}

PlayerScene.propTypes = {
  navigation: PropTypes.any,
  song: PropTypes.instanceOf(Song),
};

const styles = {
  sceneContainer: {
    backgroundColor: Colors.primary(),
    flex: 1,
  },
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
  scrubber: {
    marginBottom: 10,
    paddingBottom: 10,
  },
  controlsContainer: {
    flex: 4,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginBottom: 40,
    paddingBottom: 40,
  },
};

export default withMappedNavigationParams()(PlayerScene);
