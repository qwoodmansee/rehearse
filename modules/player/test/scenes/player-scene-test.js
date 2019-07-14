import PlayerScene from '@player/src/scenes/player-scene';
import React from 'react';
import { act, render } from '@testing-library/react-native';

jest.mock('expo-secure-store', () => ({
  getItemAsync: () => {
    return Promise.resolve(null);
  },
}));

describe('PlayerScene', () => {
  it('renders the title of the media player', () => {
    jest.useFakeTimers();
    const { getByText } = render(<PlayerScene />);
    act(() => {
      jest.runAllTimers();
    });
    getByText('Song Title');
  });
});
