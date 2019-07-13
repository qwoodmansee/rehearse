/* eslint-disable react/prop-types */
import HomeScreen from '@home/src/scenes/home-screen';
import React from 'react';
import SafeAreaView from '@core/src/components/safe-area-view';
import { storiesOf } from '@storybook/react-native';
const style = {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: '#F5FCFF',
};

const CenteredView = ({ children }) => <SafeAreaView style={style}>{children}</SafeAreaView>;

storiesOf('Home Screen', module).add('default', () => (
  <CenteredView>
    <HomeScreen />
  </CenteredView>
));
