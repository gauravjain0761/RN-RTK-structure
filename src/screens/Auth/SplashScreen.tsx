/* eslint-disable react-hooks/exhaustive-deps */
import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {getAsyncToken, getAsyncUserInfo} from '@/Hooks/asyncStorage';
import {RootState} from '@/store';
import {useSelector} from 'react-redux';
import {resetNavigation} from '@/Hooks/commonFunction';
import {GeneralStyle} from '@/constants/GeneralStyle';
import {SCREENS} from '@/navigation/ScreenNames';
import {useAppDispatch} from '@/Hooks/hooks';
import {setAuthToken, setUserInfo} from '@/features/authSlice';

const SplashScreen = () => {
  const {userInfo: userData, token: authToken} = useSelector(
    (state: RootState) => state.auth,
  );

  useEffect(() => {
    setTimeout(() => {
      getToken();
    }, 1000);
  }, []);

  const dispatch = useAppDispatch();
  const getToken = async () => {
    let token = await getAsyncToken();
    if (authToken || token) {
      let tempUserData = await getAsyncUserInfo();
      // await setAuthorization(token?.split(' ')[1]);
      dispatch(setAuthToken(authToken || token));

      if (userData && Object.keys(userData).length !== 0) {
        dispatch(setUserInfo(userData));
      } else if (tempUserData && Object.keys(tempUserData).length !== 0) {
        dispatch(setUserInfo(tempUserData));
      }
      resetNavigation(SCREENS.TabNavigation);
    } else {
      resetNavigation(SCREENS.LoginScreen);
    }
  };

  return (
    <View style={GeneralStyle.flex}>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
