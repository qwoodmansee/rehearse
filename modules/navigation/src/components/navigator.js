import Routes from '@navigation/src/components/routes';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(Routes);

export default createAppContainer(AppNavigator);
