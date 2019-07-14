import Colors from '@theme/src/utils/colors';
import PropTypes from 'prop-types';
import React from 'react';
import RehearseButton from '@core/src/components/rehearse-button';
import { Image } from 'react-native';

export default function IconButton({
  onPress,
  icon,
  style = {},
  ...additionalProps
}) {
  return (
    <RehearseButton
      onPress={onPress}
      style={[styles.buttonStyle, style]}
      {...additionalProps}
    >
      <Image
        source={icon}
        style={{
          width: 50,
          height: 50,
        }}
      />
    </RehearseButton>);
}

IconButton.propTypes = {
  icon: PropTypes.any.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.object,
};

const styles = {
  buttonStyle: {
    position: 'relative',
    backgroundColor: Colors.secondaryLight(),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    height: 80,
    width: 80,
  },
};
