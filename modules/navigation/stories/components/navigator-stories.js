/* eslint-disable react/prop-types */
import Navigator from '@navigation/src/components/navigator';
import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
};

const CenteredView = ({ children }) => <View style={style}>{children}</View>;

storiesOf('Navigator', module).add('default', () => (
  <CenteredView>
    <Navigator />
  </CenteredView>
));
