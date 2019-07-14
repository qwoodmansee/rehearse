/* eslint-disable react/prop-types */
import PlayerControls from '@player/src/components/player-controls';
import React from 'react';
import SafeAreaView from '@core/src/components/safe-area-view';
import { RandomPlayerControlList } from '@player/test/factories/player-control-factory';
import { storiesOf } from '@storybook/react-native';
const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid black',
};

const CenteredView = ({ children }) => <SafeAreaView style={style}>{children}</SafeAreaView>;

storiesOf('Player Controls', module)
  .add('default', () => {
    const controls = RandomPlayerControlList(12);
    return (
      <CenteredView>
        <PlayerControls controls={controls} />
      </CenteredView>
    );
  });
