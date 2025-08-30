export const SCREENS = {
  OnBoarding: 'OnBoarding',
  Splash: 'Splash',
  LoginScreen: 'LoginScreen',
  SignUpScreen: 'SignUpScreen',
  OtpScreen: 'OtpScreen',
  TabNavigation: 'TabNavigation',
  Dashboard: 'Dashboard',
  ProfileScreen: 'ProfileScreen',
};

export interface ScreenNames {
  [key: string]: string;

  LoginScreen: string;
  Splash: string;
}

export const SCREEN_NAMES: ScreenNames = {
  ...SCREENS,
};
