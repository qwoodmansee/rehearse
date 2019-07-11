import React from 'react';
import RehearseButton from '@core/src/components/rehearse-button';
import renderer from 'react-test-renderer';

describe('RehearseButton', () => {
  it('renders the button with the passed in text', () => {
    const buttonText = 'Button Test Text';
    const onPressMock = jest.fn();
    const tree = renderer.create((
      <RehearseButton
        onPress={onPressMock}
        text={buttonText}
      />)).toJSON();
    const stringTree = JSON.stringify(tree);

    expect(stringTree).toEqual(expect.stringContaining(buttonText));
  });
});
