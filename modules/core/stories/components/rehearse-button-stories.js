/* eslint-disable react/prop-types */
import React from 'react';
import RehearseButton from '@core/src/components/rehearse-button';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
};

const CenteredView = ({ children }) => <View style={style}>{children}</View>;

storiesOf('Rehearse Button', module).add('default', () => (
  <CenteredView>
    <RehearseButton
      onPress={() => {}}
      text={'this is a button'}
    />
  </CenteredView>
));
