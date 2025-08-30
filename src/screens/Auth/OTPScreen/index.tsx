/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {SCREENS} from '@/navigation/ScreenNames';
import {navigateTo} from '@/Hooks/commonFunction';
import OTPHeader from '@/components/auth/OTPHeader';
import CustomImage from '@/components/common/CustomImage';
import {GeneralStyle} from '@/constants/GeneralStyle';
import {getFontSize} from '@/utils/responsiveFn/responsiveFn';
import {IMAGES} from '@/assets/images';
import CustomButton from '@/components/common/CustomButton';
import CommonText from '@/components/common/CommonText';
import {styles} from './style';

const CELL_COUNT = 4;

const OTPScreen = () => {
  const {params} = useRoute<any>();

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  //   const [otpVerify, {isLoading: otpLoading}] = useOtpVerifyMutation();
  //   const [resendOtp, {isLoading: resendOtpLoading}] = useResendOtpMutation();

  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let clear = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(clear);
  }, []);

  const onLoginSubmit = async () => {
    navigateTo(SCREENS.TabNavigation);
    // let data = {
    //   otp: value,
    //   user_id: params?.userData?._id,
    //   deviceToken: fcmToken,
    //   deviceType: Platform.OS === 'ios' ? 'IOS' : 'ANDROID',
    //   language: 'en',
    // };
    // const response = await otpVerify(data).unwrap();
    // console.log('Login Response', response);
    // if (response?.status) {
    //   if (params?.isSignup) {
    //     navigateTo(SCREEN_NAMES.FaceRecognition);
    //   } else {
    //     resetNavigation(SCREEN_NAMES.TabNavigation);
    //   }
    // } else {
    //   errorToast(response?.message);
    // }
  };

  const onResendOtp = async () => {
    // let data = {
    //   phone_code: params?.numInfo?.callingCode[0],
    //   phone: params?.num,
    //   language: language,
    // };
    // const response = await resendOtp(data).unwrap();
    // if (response?.status) {
    //   console.log(response, 'response--');
    // }
  };

  return (
    <View style={GeneralStyle.container}>
      <View style={styles.subContainer}>
        <OTPHeader />
        <CustomImage
          source={IMAGES.otpImage}
          size={getFontSize(20)}
          containerStyle={{alignSelf: 'center', marginTop: getFontSize(3.5)}}
        />
        <CommonText text={'Verification code'} style={styles.topLabel} />

        <CommonText
          text="Enter the verification code we’ve send to your"
          style={styles.topSubLabel}>
          {' '}
          <CommonText
            text={params?.email || 'muhammad.zuhri.com'}
            style={styles.topSubLabel}
          />
        </CommonText>

        <View style={styles.otpContainer}>
          <CodeField
            ref={ref}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <CommonText
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
                text={symbol || (isFocused ? <Cursor /> : null)}
              />
            )}
            autoFocus
          />
        </View>

        <CustomButton
          title={'Confirm'}
          btnStyle={{marginTop: getFontSize(5)}}
          onPress={onLoginSubmit}
        />
        {timer !== 0 ? (
          <CommonText text="Resend code in" style={styles.accountText}>
            {' '}
            <CommonText
              text={timer !== 0 ? timer : '0'}
              style={styles.accountText}
            />
            <CommonText text={'s'} style={styles.accountText} />
          </CommonText>
        ) : (
          <CommonText
            onPress={() => {
              onResendOtp();
            }}
            text="Didn’t receive code?"
            style={styles.accountText}>
            {' '}
            <CommonText text={'Resend'} style={styles.resendText} />
          </CommonText>
        )}
      </View>
    </View>
  );
};

export default OTPScreen;
