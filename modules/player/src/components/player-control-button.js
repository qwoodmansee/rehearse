import IconButton from '@player/src/components/icon-button';
import PlayerControl from '@player/src/models/player-control';
import PropTypes from 'prop-types';
import React from 'react';

export default function PlayerControlButton({ playerControl, ...additionalProps }) {
  return (
    <IconButton
      icon={playerControl.icon}
      onPress={playerControl.controlFn}
      {...additionalProps}
    />
  );
}

PlayerControlButton.propTypes = {
  playerControl: PropTypes.instanceOf(PlayerControl),
};
