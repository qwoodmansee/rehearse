import Colors from '@theme/src/utils/colors';
import React from 'react';
import RehearseText from '@core/src/components/rehearse-text';
import { fireEvent, render } from '@testing-library/react-native';

describe('RehearseText', () => {
  it('renders the passed in text', () => {
    const { getByText } = render(
      <RehearseText>
        Test Text
      </RehearseText>
    );

    getByText('Test Text');
  });

  it('applies passed in styles to to the text', () => {
    const { getByText } = render(
      <RehearseText
        style={{
          color: Colors.primary(),
        }}
      >
        Test Text
      </RehearseText>
    );

    const coloredTextElement = getByText('Test Text');
    expect(coloredTextElement.props.style).toContainEqual({
      color: Colors.primary(),
    });
  });

  it('calls the on press function when clicked', () => {
    const onPressMock = jest.fn();

    const { getByText } = render(
      <RehearseText onPress={onPressMock}>
        Test Text
      </RehearseText>
    );

    const textElement = getByText('Test Text');
    fireEvent.press(textElement);
    expect(onPressMock.mock.calls.length).toEqual(1);
  });
});
