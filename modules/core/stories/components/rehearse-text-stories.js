/* eslint-disable react/prop-types */
import Colors from '@theme/src/utils/colors';
import React from 'react';
import RehearseText from '@core/src/components/rehearse-text';
import { SafeAreaView } from 'react-native';
import { storiesOf } from '@storybook/react-native';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.primary(),
};

const CenteredView = ({ children }) => <SafeAreaView style={style}>{children}</SafeAreaView>;

storiesOf('Rehearse Text', module)
  .add('default', () => (
    <CenteredView>
      <RehearseText
        onPress={() => {}}
      >
        Text!
      </RehearseText>
    </CenteredView>
  ))
  .add('with some styling', () => {
    const styles = {
      color: Colors.secondaryLight(),
    };
    return (
      <CenteredView>
        <RehearseText
          onPress={() => {}}
          style={styles}
        >
          Text with Color!
        </RehearseText>
      </CenteredView>
    );
  });
