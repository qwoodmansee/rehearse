import Colors from '@theme/src/utils/colors';
import PropTypes from 'prop-types';
import React from 'react';
import RehearseButton from '@core/src/components/rehearse-button';
import RehearseText from '@core/src/components/rehearse-text';
import SafeAreaView from '@core/src/components/safe-area-view';
import Theme from '@theme/src/utils/theme';
import { StyleSheet } from 'react-native';
import { View } from 'react-native-animatable';
import { withMappedNavigationParams } from 'react-navigation-props-mapper';

function SceneWrapper({
  navigation, children, ...additionalProps
}) {
  return (
    <SafeAreaView style={styles.sceneContainer}>
      <RehearseButton
        onPress={() => navigation.goBack()}
        style={styles.backButtonStyle}
      >
        <RehearseText style={styles.backText}>
          {'<<'}
        </RehearseText>
      </RehearseButton>
      <View>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            navigation,
            ...additionalProps,
          });
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: Colors.primary(),
    flex: 1,
  },
  backButtonStyle: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.secondaryDark(),
    borderRadius: 20,
    padding: 10,
    left: '5%',
  },
  backText: {
    ...Theme.content(),
  },
});

SceneWrapper.propTypes = {
  children: PropTypes.node,
  navigation: PropTypes.any,
};

export default withMappedNavigationParams()(SceneWrapper);
