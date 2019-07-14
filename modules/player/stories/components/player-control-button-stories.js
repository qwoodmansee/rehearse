/* eslint-disable react/prop-types */
import BackToPoint from '@player/assets/back-to-point.png';
import PlayerControl from '@player/src/models/player-control';
import PlayerControlButton from '@player/src/components/player-control-button';
import React from 'react';
import SafeAreaView from '@core/src/components/safe-area-view';
import { storiesOf } from '@storybook/react-native';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const CenteredView = ({ children }) => <SafeAreaView style={style}>{children}</SafeAreaView>;

storiesOf('Icon Button', module)
  .add('default', () => (
    <CenteredView>
      <PlayerControlButton
        playerControl={new PlayerControl({
          icon: BackToPoint,
          controlFn: () => {},
        })}
      />
    </CenteredView>
  ));
