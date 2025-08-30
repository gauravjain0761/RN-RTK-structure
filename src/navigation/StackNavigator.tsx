import {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from './ScreenNames';
import SplashScreen from '@/screens/Auth/SplashScreen';
import SignUpScreen from '@/screens/Auth/SignUpScreen';
import LoginScreen from '@/screens/Auth/LoginScreen';
import OTPScreen from '@/screens/Auth/OTPScreen';
import TabNavigation from './TabNavigation';

export type RootStackParamList = {
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator<any>();

const StackNavigator: FC = () => {
  let screens = [
    {name: SCREENS.Splash, component: SplashScreen},
    {name: SCREENS.LoginScreen, component: LoginScreen},
    {name: SCREENS.SignUpScreen, component: SignUpScreen},
    {name: SCREENS.OtpScreen, component: OTPScreen},
    {name: SCREENS.TabNavigation, component: TabNavigation},
  ];
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={SCREENS.Splash}>
      {screens.map((item: any, index: any) => {
        return (
          <Stack.Screen
            name={item.name}
            key={index.toString()}
            component={item.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};
export default StackNavigator;
