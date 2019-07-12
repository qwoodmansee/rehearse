import Routes from '@navigation/src/components/routes';
import { createAppContainer, createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator(Routes, {
  headerMode: 'none',
});

export default createAppContainer(AppNavigator);
