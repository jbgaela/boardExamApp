import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './src/screens/SplashScreen';
import SignInScreen from './src/screens/SignInScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const navigator = createStackNavigator(
  {
    Splash: SplashScreen,
    SignIn: SignInScreen,
    Dashboard: DashboardScreen,
    SignUp: SignUpScreen,
  },
  {
    initialRouteName: 'SignUp',
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
