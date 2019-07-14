import Colors from '@theme/src/utils/colors';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function RehearseText({
  children,
  onPress,
  style,
  TextComponent = Text,
  ...additionalProps
}) {
  return (
    <TextComponent
      onPress={onPress}
      style={[styles.text, style]}
      {...additionalProps}
    >
      {children}
    </TextComponent>
  );
}

RehearseText.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  style: PropTypes.object,
  TextComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

const styles = StyleSheet.create({
  text: {
    color: Colors.white(),
  },
});
