import Routes from '@navigation/src/components/routes';
import { createAppContainer, createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator(Routes, {
  headerMode: 'none',
  initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);
