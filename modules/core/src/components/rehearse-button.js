import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function RehearseButton({
  children, onPress, ...additionalProps
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={'internal-button'}
      {...additionalProps}
    >
      {children}
    </TouchableOpacity>
  );
}

RehearseButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
