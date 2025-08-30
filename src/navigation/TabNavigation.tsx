/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {hp, wp} from '@/utils/responsiveFn/responsiveFn';
import {IMAGES} from '@/assets/images';
import {Colors} from '@/constants/Colors';
import CustomShadow from '@/components/common/CustomShadow';
import FastImage from 'react-native-fast-image';
import {GeneralStyle} from '@/constants/GeneralStyle';
import {SCREENS} from './ScreenNames';
import HomeScreen from '@/screens/Home/HomeScreen';
import ProfileScreen from '@/screens/Profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const tabs = [
    {name: SCREENS.Dashboard, icon: IMAGES.home, component: HomeScreen},
    {
      name: SCREENS.ProfileScreen,
      icon: IMAGES.profile,
      component: ProfileScreen,
    },
  ];

  const CustomTabBarButton = ({children, onPress, route, ...props}: any) => {
    const handlePress = () => {
      if (route.name === 'Create') {
        console.log('helle');
      } else {
        onPress();
      }
    };

    return (
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={[props.style, styles.tabButton]}>{children}</View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <CustomShadow shadowStyle={GeneralStyle.flex}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarHideOnKeyboard: true,
          animation: 'none',
          tabBarStyle: styles.tabBarStyle,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            const {icon} = tabs.find(tab => tab.name === route.name) || {};
            return (
              <View style={styles.iconContainer}>
                <FastImage
                  source={icon}
                  defaultSource={icon}
                  style={{
                    width: wp(30),
                    height: hp(25),
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                  tintColor={focused ? Colors.white : Colors.black}
                />
              </View>
            );
          },
          tabBarButton: props => (
            <CustomTabBarButton {...props} route={route} />
          ),
        })}
        initialRouteName={SCREENS.Dashboard}>
        {tabs.map(tab => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
          />
        ))}
      </Tab.Navigator>
    </CustomShadow>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarStyle: {
    left: 0,
    right: 0,
    height: hp(70),
    borderTopWidth: 0,
    position: 'absolute',
    borderRadius: hp(100),
    marginHorizontal: wp(24),
    backgroundColor: Colors.primary,
    bottom: Platform.OS === 'ios' ? 0 : hp(15),
  },
});

export default TabNavigation;
