/* eslint-disable react/prop-types */
import HomeScreen from '@home/src/scenes/home-screen';
import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
};

const CenteredView = ({ children }) => <View style={style}>{children}</View>;

storiesOf('Home Screen', module).add('default', () => (
  <CenteredView>
    <HomeScreen />
  </CenteredView>
));
