import IconButton from '@player/src/components/icon-button';
import PlayerControl from '@player/src/models/player-control';
import PropTypes from 'prop-types';
import React from 'react';
import RehearseText from '@core/src/components/rehearse-text';
import Theme from '@theme/src/utils/theme';

export default function PlayerControlButton({ playerControl, ...additionalProps }) {
  return (
    <IconButton
      icon={playerControl.icon}
      onPress={() => playerControl.controlFn()}
      {...additionalProps}
    >
      {playerControl.text !== '' && <RehearseText style={styles.buttonText}>{playerControl.text}</RehearseText>}
    </IconButton>
  );
}
const styles = {
  buttonText: {
    ...Theme.title2(),
  },
};

PlayerControlButton.propTypes = {
  playerControl: PropTypes.instanceOf(PlayerControl),
};
