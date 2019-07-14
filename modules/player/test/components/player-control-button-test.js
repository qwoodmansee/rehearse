import BackToPoint from '@player/assets/back-to-point.png';
import PlayerControl from '@player/src/models/player-control';
import PlayerControlButton from '@player/src/components/player-control-button';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

describe('PlayerControlButton', () => {
  it('renders with the icon', () => {
    const { baseElement } = render(
      <PlayerControlButton
        playerControl={new PlayerControl({
          icon: BackToPoint,
          controlFn: () => {},
        })}
      />);
    expect(baseElement).toMatchSnapshot();
  });

  it('calls the player control function when pressed', () => {
    const mockControlFn = jest.fn();
    const { getByTestId } = render(
      <PlayerControlButton
        playerControl={new PlayerControl({
          icon: BackToPoint,
          controlFn: mockControlFn,
        })}
        testID={'test-control'}
      />);
    fireEvent.press(getByTestId('test-control'));
    expect(mockControlFn).toHaveBeenCalled();
  });
});
