import AudioPlayer from '@core/src/utils/audio-player';
import Colors from '@theme/src/utils/colors';
import PlayerControls from '@player/src/components/player-controls';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import RealPlayerControls from '@player/src/utils/real-player-controls';
import RehearseText from '@core/src/components/rehearse-text';
import SafeAreaView from '@core/src/components/safe-area-view';
import Theme from '@theme/src/utils/theme';
import { Slider } from 'react-native';
import { View } from 'react-native';
import { withMappedNavigationParams } from 'react-navigation-props-mapper';

function PlayerScene({
  navigation, song, audioPlayer,
}) {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isSettingPracticePoint, setIsSettingPracticePoint] = useState(false);

  const soundCallback = (status) => {
    if (status.didJustFinish) {
      audioPlayer.stopAsync();
    } else if (status.isLoaded) {
      const position = isSeeking
        ? sliderPosition
        : status.positionMillis;
      const updatedIsPlaying = isSeeking || status.isBuffering
        ? isPlaying
        : status.isPlaying;
      setSliderPosition(position);
      setDuration(status.durationMillis);
      setShouldPlay(status.shouldPlay);
      setIsPlaying(updatedIsPlaying);
      setIsBuffering(status.isBuffering);
    }
  };

  const onCompleteSliding = async (value) => {
    if (audioPlayer !== null) {
      await audioPlayer.setPosition(value);
      setIsSeeking(true);
    }
  };

  audioPlayer.setPlaybackStatusUpdate(soundCallback);

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
          <Slider
            maximumTrackTintColor={Colors.secondaryDark()}
            maximumValue={duration}
            minimumTrackTintColor={Colors.secondaryLight()}
            minimumValue={0}
            onSlidingComplete={onCompleteSliding}
            style={styles.scrubber}
            value={sliderPosition}
          />
          <PlayerControls controls={RealPlayerControls(audioPlayer, isSettingPracticePoint, setIsSettingPracticePoint)} />
        </View>
      </View>
    </SafeAreaView>
  );
}

PlayerScene.propTypes = {
  navigation: PropTypes.any,
  song: PropTypes.shape({
    localDownloadUri: PropTypes.string,
    songName: PropTypes.string,
    practiceSession: PropTypes.object,
    audioPlayer: PropTypes.instanceOf(AudioPlayer),
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
