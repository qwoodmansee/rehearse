/* eslint-disable react/prop-types */
import React from 'react';
import SongSelection from '@song-selection/src/scenes/song-selection';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

const style = {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: '#F5FCFF',
};

const CenteredView = ({ children }) => <View style={style}>{children}</View>;

storiesOf('Song Selection', module).add('default', () => {
  const songs = [
    {
      songName: 'Song Number 1',
      songLength: 58,
    },
    {
      songName: 'Song Number 2',
      songLength: 126,
    },
    {
      songName: 'Song Number 3',
      songLength: 68,
    },
    {
      songName: 'Song Number 4',
      songLength: 416,
    },
  ];
  return (
    <CenteredView>
      <SongSelection songs={songs} />
    </CenteredView>
  );
});
