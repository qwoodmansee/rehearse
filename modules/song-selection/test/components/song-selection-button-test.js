import React from 'react';
import SongSelectionButton from '@song-selection/src/components/song-selection-button';
import { fireEvent, render } from '@testing-library/react-native';

describe('SongSelectionButton', () => {
  it('should render the song name', () => {
    const { getByText } = render(
      <SongSelectionButton
        songLength={200}
        songName={'Some Song Name'}
      />);

    getByText('Some Song Name');
  });

  it('should render the song length in HH:MM format', () => {
    const { getByText } = render(
      <SongSelectionButton
        songLength={200}
        songName={'Some Song Name'}
      />);

    getByText('3:20');
  });

  it('should call the onPress function when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <SongSelectionButton
        onPress={onPressMock}
        songLength={200}
        songName={'Some Song Name'}
      />);

    fireEvent.press(getByText('Some Song Name'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
