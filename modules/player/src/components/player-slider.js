import AudioPlayer from '@core/src/utils/audio-player';
import Colors from '@theme/src/utils/colors';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Slider } from 'react-native';

export default function PlayerSlider({ audioPlayer }) {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [duration, setDuration] = useState(0);
  useEffect(() => {
    const soundCallback = (status) => {
      if (status.didJustFinish) {
        audioPlayer.stopAsync();
      } else if (status.isLoaded) {
        const position = isSeeking
          ? sliderPosition
          : status.positionMillis;
        setSliderPosition(position);
        setDuration(status.durationMillis);
      }
    };

    audioPlayer.setPlaybackStatusUpdate(soundCallback);
  }, [audioPlayer, isSeeking, sliderPosition]);

  const onStartSliding = async () => {
    if (audioPlayer !== null) {
      audioPlayer.pause();
      setIsSeeking(true);
    }
  };
  const onCompleteSliding = async (value) => {
    if (audioPlayer !== null) {
      audioPlayer.setPosition(value);
      setIsSeeking(false);
    }
  };

  return (
    <Slider
      maximumTrackTintColor={Colors.secondaryDark()}
      maximumValue={duration}
      minimumTrackTintColor={Colors.secondaryLight()}
      minimumValue={0}
      onPress={onStartSliding}
      onSlidingComplete={onCompleteSliding}
      style={styles.scrubber}
      value={sliderPosition}
    />);
}

PlayerSlider.propTypes = {
  audioPlayer: PropTypes.instanceOf(AudioPlayer),
  styles: PropTypes.object,
};

const styles = {
  scrubber: {
    marginBottom: 10,
    paddingBottom: 10,
  },
};
