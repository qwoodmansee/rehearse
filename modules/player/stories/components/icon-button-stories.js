/* eslint-disable react/prop-types */
import IconButton from '@player/src/components/icon-button';
import React from 'react';
import SafeAreaView from '@core/src/components/safe-area-view';
import { storiesOf } from '@storybook/react-native';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const CenteredView = ({ children }) => <SafeAreaView style={style}>{children}</SafeAreaView>;

storiesOf('Icon Button', module)
  .add('default', () => (
    <CenteredView>
      <IconButton />
    </CenteredView>
  ));
