/* eslint-disable react/prop-types */
import React from 'react';
import SafeAreaView from '@core/src/components/safe-area-view';
import SongSelectionButton from '@song-selection/src/components/song-selection-button';
import { storiesOf } from '@storybook/react-native';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const CenteredView = ({ children }) => <SafeAreaView style={style}>{children}</SafeAreaView>;

storiesOf('Song Selection Button', module)
  .add('default', () => (
    <CenteredView>
      <SongSelectionButton
        onPress={() => {}}
        songLength={126}
        songName={'Example Song Name'}
      />
    </CenteredView>
  ))
  .add('very long name', () => (
    <CenteredView>
      <SongSelectionButton
        onPress={() => {}}
        songLength={126}
        songName={'Very long song name, which will wrap, by the 1975'}
      />
    </CenteredView>
  ));
