/* eslint-disable react/prop-types */
import Colors from '@theme/src/utils/colors';
import React from 'react';
import RehearseButton from '@core/src/components/rehearse-button';
import SafeAreaView from '@core/src/components/safe-area-view';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const CenteredView = ({ children }) => <SafeAreaView style={style}>{children}</SafeAreaView>;

storiesOf('Rehearse Button', module)
  .add('default', () => (
    <CenteredView>
      <RehearseButton
        onPress={() => {}}
      >
        <Text>This is a button</Text>
      </RehearseButton>
    </CenteredView>
  ))
  .add('with some styling', () => {
    const styles = {
      backgroundColor: Colors.secondaryLight(),
      borderRadius: 20,
      justifyContent: 'center',
      padding: 10,
    };
    return (
      <CenteredView>
        <RehearseButton
          onPress={() => {}}
          style={styles}
        >
          <Text>This is a button</Text>
        </RehearseButton>
      </CenteredView>
    );
  });
