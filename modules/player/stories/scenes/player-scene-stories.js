/* eslint-disable react/prop-types */
import Colors from '@theme/src/utils/colors';
import PlayerScene from '@player/src/scenes/player-scene';
import React from 'react';
import SafeAreaView from '@core/src/components/safe-area-view';
import { storiesOf } from '@storybook/react-native';

const style = {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: Colors.primary(),
};

const CenteredView = ({ children }) => <SafeAreaView style={style}>{children}</SafeAreaView>;

storiesOf('Player Scene', module).add('default', () => (
  <CenteredView>
    <PlayerScene
      navigation={{
        navigate: () => {},
      }}
    />
  </CenteredView>
));
