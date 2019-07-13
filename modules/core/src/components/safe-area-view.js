import React from 'react';
import { SafeAreaView as DefaultAreaView, Platform, StatusBar } from 'react-native';

function generateSafeAreaStylesAndroid() {
  if (Platform.OS === 'android') {
    return {
      paddingTop: StatusBar.currentHeight,
    };
  }

  return {};
}

export default function SafeAreaView(props) {
  return (
    <DefaultAreaView
      {...props}
      style={{
        ...generateSafeAreaStylesAndroid(),
        ...props.style,
      }}
    >
      {props.children}
    </DefaultAreaView>
  );
}

SafeAreaView.propTypes = {
  ...DefaultAreaView.propTypes,
};

SafeAreaView.defaultProps = {
  testID: 'SafeAreaView',
};
