import AudioPlayer from '@core/src/utils/audio-player';
import Colors from '@theme/src/utils/colors';
import PlayerControls from '@player/src/components/player-controls';
import PlayerSlider from '@player/src/components/player-slider';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import RealPlayerControls from '@player/src/utils/real-player-controls';
import RehearseText from '@core/src/components/rehearse-text';
import SafeAreaView from '@core/src/components/safe-area-view';
import Theme from '@theme/src/utils/theme';
import { View } from 'react-native';
import { withMappedNavigationParams } from 'react-navigation-props-mapper';
function PlayerScene({
  navigation, song, audioPlayer,
}) {
  const [isSettingPracticePoint, setIsSettingPracticePoint] = useState(false);

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
          {isSettingPracticePoint && <RehearseText style={styles.songTitle}>Setting practice point</RehearseText>}
        </View>
        <View style={styles.controlsContainer}>
          <PlayerSlider audioPlayer={audioPlayer} />
          <PlayerControls controls={RealPlayerControls(audioPlayer, isSettingPracticePoint, setIsSettingPracticePoint)} />
        </View>
      </View>
    </SafeAreaView>
  );
}

PlayerScene.propTypes = {
  audioPlayer: PropTypes.instanceOf(AudioPlayer),
  navigation: PropTypes.any,
  song: PropTypes.shape({
    localDownloadUri: PropTypes.string,
    songName: PropTypes.string,
    practiceSession: PropTypes.object,
  }),
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
  controlsContainer: {
    flex: 4,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginBottom: 40,
    paddingBottom: 40,
  },
};

export default withMappedNavigationParams()(PlayerScene);
