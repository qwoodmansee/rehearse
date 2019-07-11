import Routes from '@navigation/src/components/routes';
import { createAppContainer, createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator(Routes);

export default createAppContainer(AppNavigator);
