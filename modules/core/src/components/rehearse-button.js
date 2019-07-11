import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function RehearseButton({ text, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={'internal-button'}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

RehearseButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
