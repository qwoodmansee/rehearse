import BackToPoint from '@player/assets/back-to-point.png';
import IconButton from '@player/src/components/icon-button';
import React from 'react';
import RehearseText from '@core/src/components/rehearse-text';
import { fireEvent, render } from '@testing-library/react-native';

describe('IconButton', () => {
  it('renders the icon', () => {
    const { baseElement } = render(
      <IconButton
        icon={BackToPoint}
        onPress={() => {}}
      />);

    expect(baseElement).toMatchSnapshot();
  });

  it('calls the onPress function when pressed', () => {
    const mockPressFn = jest.fn();
    const { getByTestId } = render(
      <IconButton
        icon={BackToPoint}
        onPress={mockPressFn}
        testID={'test-control'}
      />);
    fireEvent.press(getByTestId('test-control'));
    expect(mockPressFn).toHaveBeenCalled();
  });

  describe('when passed text', () => {
    it('renders the text', () => {
      const { getByText } = render(<IconButton><RehearseText>ButtonText</RehearseText></IconButton>);
      getByText('ButtonText');
    });
  });
});
