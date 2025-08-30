import {Colors} from '@/constants/Colors';
import {rowReverseRTL} from '@/utils/arabicStyles';
import {
  commonFontStyle,
  getFontSize,
  hp,
  wp,
} from '@/utils/responsiveFn/responsiveFn';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: getFontSize(2.2),
    paddingTop: getFontSize(10),
  },
  topLabel: {
    ...commonFontStyle(600, 3.4, Colors.black),
    textAlign: 'center',
    paddingBottom: getFontSize(6),
  },

  midContainer: {
    ...rowReverseRTL(),
    alignItems: 'center',
    gap: 10,
    marginLeft: getFontSize(0.5),
  },

  accountText: {
    ...commonFontStyle(400, 2, Colors._909090),
    textAlign: 'center',
    paddingTop: getFontSize(5),
  },

  signUpAccountText: {
    ...commonFontStyle(600, 2, Colors.primary),
  },
  checkBoxText: {
    ...commonFontStyle(400, 1.9, Colors._5E5D5D),
  },
  checkBoxText2: {
    ...commonFontStyle(400, 1.9, Colors.primary),
  },

  dividerContainer: {
    ...rowReverseRTL(),
    alignItems: 'center',
    paddingVertical: hp(45),
    marginHorizontal: wp(23),
  },
  label: {
    ...commonFontStyle(400, 1.9, Colors._6B6969),
    paddingHorizontal: wp(15),
  },
  divider: {
    flex: 1,
    height: hp(1),
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },

  socialContainer: {
    ...rowReverseRTL(),
    alignItems: 'center',
    alignSelf: 'center',
    gap: getFontSize(3),
  },

  socialBtn: {
    borderWidth: 1.5,
    borderColor: Colors._F3F3F3,
    borderRadius: getFontSize(2),
    height: getFontSize(6),
    width: getFontSize(9),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
