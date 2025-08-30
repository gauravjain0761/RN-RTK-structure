/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {IMAGES} from '../../assets/images';
import {
  commonFontStyle,
  getFontSize,
} from '../../utils/responsiveFn/responsiveFn';
import {flipImage, rowReverseRTL} from '../../utils/arabicStyles';
import {Colors} from '../../constants/Colors';
import CustomImage from '../common/CustomImage';
import {goBack} from '../../Hooks/commonFunction';
import CommonText from '../common/CommonText';

const OTPHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <CustomImage
        onPress={() => {
          goBack();
        }}
        source={IMAGES.backArrow}
        size={getFontSize(2.5)}
        containerStyle={{alignSelf: 'center'}}
        imageStyle={{...flipImage()}}
      />
      <CommonText text={'Verification'} style={styles.headerText} />
      <CustomImage
        source={IMAGES.backArrow}
        size={getFontSize(2.5)}
        containerStyle={{alignSelf: 'center'}}
        imageStyle={{}}
        tintColor={'transparent'}
      />
    </View>
  );
};

export default OTPHeader;

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: getFontSize(1.8),
    ...rowReverseRTL(),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    ...commonFontStyle(600, 3.4, Colors.black),
  },
});
