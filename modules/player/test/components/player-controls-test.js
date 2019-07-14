import PlayerControls from '@player/src/components/player-controls';
import React from 'react';
import { ConsistentPlayerControlList, RandomPlayerControlList } from '@player/test/factories/player-control-factory';
import { fireEvent, render } from '@testing-library/react-native';

describe('PlayerControls', () => {
  it('renders', () => {
    const controls = ConsistentPlayerControlList();
    const { baseElement } = render(<PlayerControls controls={controls} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('correctly associates each button to their control function', () => {
    const controls = ConsistentPlayerControlList();
    const mockControlFunctionOne = jest.fn();
    const mockControlFunctionTwo = jest.fn();
    controls[1].controlFn = mockControlFunctionOne;
    controls[2].controlFn = mockControlFunctionTwo;
    const { getAllByTestId } = render(<PlayerControls controls={controls} />);

    fireEvent.press(getAllByTestId('internal-button')[1]);

    expect(mockControlFunctionOne).toHaveBeenCalled();
    expect(mockControlFunctionTwo).not.toHaveBeenCalled();
  });

  it('renders the correct number of buttons based on the number of controls', () => {
    const controls = RandomPlayerControlList(8);
    const { getAllByTestId } = render(<PlayerControls controls={controls} />);

    expect(getAllByTestId('internal-button').length).toEqual(8);
  });
});
