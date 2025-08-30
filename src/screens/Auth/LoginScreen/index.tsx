import {View} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '@/components/common/CustomTextInput';
import CheckBox from 'react-native-check-box';
import CustomButton from '@/components/common/CustomButton';
import {getFontSize, hp} from '@/utils/responsiveFn/responsiveFn';

import {Colors} from '@/constants/Colors';
import CommonText from '@/components/common/CommonText';
import CustomImage from '@/components/common/CustomImage';
import {IMAGES} from '@/assets/images';
import {navigateTo} from '@/Hooks/commonFunction';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SCREENS} from '@/navigation/ScreenNames';
import {styles} from './style';

const LoginScreen = ({}: any) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <CommonText text="Login to Your Account" style={styles.topLabel} />
      <View style={{gap: hp(34)}}>
        <CustomTextInput placeholder="Email" />
        <CustomTextInput placeholder="Password" secureTextEntry={true} />
        <View style={styles.midContainer}>
          <CheckBox
            onClick={() => {
              setToggleCheckBox(!toggleCheckBox);
            }}
            isChecked={toggleCheckBox}
            uncheckedCheckBoxColor="#878787"
            checkedCheckBoxColor={Colors.primary}
          />
          <CommonText text="I agree to follow the" style={styles.checkBoxText}>
            {' '}
            <CommonText text="terms of use" style={styles.checkBoxText2} />
          </CommonText>
        </View>
      </View>

      <View style={{marginTop: hp(60), gap: hp(45)}}>
        <CustomButton
          title={'Login'}
          onPress={() => navigateTo(SCREENS.OtpScreen)}
        />
        <CustomButton title={'Login as a Guest'} type="outline" />
      </View>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <CommonText text="or continue with" style={styles.label} />
        <View style={styles.divider} />
      </View>

      <View style={styles.socialContainer}>
        <CustomImage
          source={IMAGES.google}
          size={getFontSize(2.5)}
          containerStyle={styles.socialBtn}
        />

        <CustomImage
          source={IMAGES.apple}
          size={getFontSize(2.5)}
          containerStyle={styles.socialBtn}
        />
      </View>

      <CommonText
        onPress={() => navigateTo(SCREENS.SignUpScreen)}
        text="Don't have an account?"
        style={styles.accountText}>
        {' '}
        <CommonText text="Sign Up" style={styles.signUpAccountText} />
      </CommonText>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
