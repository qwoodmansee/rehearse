import React from 'react';
import RehearseButton from '@core/src/components/rehearse-button';
import { fireEvent, render } from '@testing-library/react-native';

describe('RehearseButton', () => {
  it('renders the button with the passed in text', () => {
    const onPressMock = jest.fn();

    const { getByText } = render(
      <RehearseButton
        onPress={onPressMock}
        text={'Button Test Text'}
      />);

    getByText('Button Test Text');
  });

  it('calls the on press function when clicked', () => {
    const onPressMock = jest.fn();

    const { getByText } = render(
      <RehearseButton
        onPress={onPressMock}
        text={'Button Test Text'}
      />);

    const button = getByText('Button Test Text');
    fireEvent.press(button);
    expect(onPressMock.mock.calls.length).toEqual(1);
  });
});
