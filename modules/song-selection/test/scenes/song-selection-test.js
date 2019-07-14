import React from 'react';
import SongSelection from '@song-selection/src/scenes/song-selection';
import { render } from '@testing-library/react-native';

describe('SongSelection', () => {
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

  it('should render the passed in songs', () => {
    const { getByText } = render(
      <SongSelection
        songs={songs}
      />);

    songs.forEach(({ songName }) => {
      getByText(songName);
    });
  });
});
