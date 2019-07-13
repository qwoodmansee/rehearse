import Colors from '@theme/src/utils/colors';
import PropTypes from 'prop-types';
import React from 'react';
import RehearseButton from '@core/src/components/rehearse-button';
import RehearseText from '@core/src/components/rehearse-text';

export default function SongSelectionButton({
  songName,
  songLength,
  onPress,
  style,
  ...additionalProps
}) {
  const formattedTimeString = ~~(songLength / 60) + ':' + (songLength % 60 < 10 ? '0' : '') + songLength % 60;

  return (
    <RehearseButton
      onPress={onPress}
      style={[styles.buttonStyle, style]}
      {...additionalProps}
    >
      <RehearseText style={styles.songNameTextStyle}>{songName}</RehearseText>
      <RehearseText style={styles.songLengthTextStyle}>{formattedTimeString}</RehearseText>
    </RehearseButton>
  );
}

SongSelectionButton.propTypes = {
  onPress: PropTypes.func,
  songLength: PropTypes.number.isRequired,
  songName: PropTypes.string.isRequired,
  style: PropTypes.object,
};

const styles = {
  buttonStyle: {
    position: 'relative',
    backgroundColor: Colors.secondaryLight(),
    borderRadius: 20,
    padding: 10,
    width: '90%',
  },
  songNameTextStyle: {
    maxWidth: '75%',
  },
  songLengthTextStyle: {
    position: 'absolute',
    top: 10,
    right: 15,
  },
};
