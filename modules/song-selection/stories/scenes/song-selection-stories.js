/* eslint-disable react/prop-types */
import React from 'react';
import SafeAreaView from '@core/src/components/safe-area-view';
import SongSelection from '@song-selection/src/scenes/song-selection';
import { RandomSongList } from '@song-selection/test/factories/song-list-factory';
import { storiesOf } from '@storybook/react-native';

const style = {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: '#F5FCFF',
};

const CenteredView = ({ children }) => <SafeAreaView style={style}>{children}</SafeAreaView>;

storiesOf('Song Selection', module).add('default', () => {
  const songs = RandomSongList(8);
  return (
    <CenteredView>
      <SongSelection songs={songs} />
    </CenteredView>
  );
});
