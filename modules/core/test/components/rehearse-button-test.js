import Colors from '@theme/src/utils/colors';
import React from 'react';
import RehearseButton from '@core/src/components/rehearse-button';
import { Text } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';

describe('RehearseButton', () => {
  it('renders the button with the passed in text', () => {
    const { getByText } = render(
      <RehearseButton>
        <Text>Button Test Text</Text>
      </RehearseButton>
    );

    getByText('Button Test Text');
  });

  it('applies passed in styles the the button', () => {
    const { getByTestId } = render(
      <RehearseButton
        style={{
          backgroundColor: Colors.primary(),
        }}
        testID={'test-button'}
      >
        <Text>Button Test Text</Text>
      </RehearseButton>
    );

    const coloredButton = getByTestId('test-button');
    expect(coloredButton.props.style.backgroundColor).toEqual(Colors.primary());
  });

  it('calls the on press function when clicked', () => {
    const onPressMock = jest.fn();

    const { getByText } = render(
      <RehearseButton onPress={onPressMock}>
        <Text>Button Test Text</Text>
      </RehearseButton>
    );

    const button = getByText('Button Test Text');
    fireEvent.press(button);
    expect(onPressMock.mock.calls.length).toEqual(1);
  });
});
