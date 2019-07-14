import PlayerControl from '@player/src/models/player-control';
import PlayerControlButton from '@player/src/components/player-control-button';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

export default function PlayerControls({
  controls,
  ...additionalProps
}) {
  return (
    <View
      style={styles.controlsContainer}
      {...additionalProps}
    >
      {controls.map((control, i) => {
        return (
          <PlayerControlButton
            key={i}
            playerControl={control}
            style={styles.controlButton}
          />);
      })}
    </View>
  );
}

PlayerControls.propTypes = {
  controls: PropTypes.arrayOf(PropTypes.instanceOf(PlayerControl)).isRequired,
};

const styles = {
  controlsContainer: {
    width: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  controlButton: {
    marginTop: 10,
  },
};
