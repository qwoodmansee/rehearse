import IconButton from '@player/src/components/icon-button';
import React from 'react';
import { render } from '@testing-library/react-native';

describe('IconButton', () => {
  it('renders', () => {
    const { getByText } = render(<IconButton />);

    getByText('Icon Button');
  });
});
