import {Colors} from '@/constants/Colors';
import {commonFontStyle, getFontSize} from '@/utils/responsiveFn/responsiveFn';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    paddingHorizontal: getFontSize(2.2),
    paddingVertical: getFontSize(1.8),
  },
  topLabel: {
    marginVertical: getFontSize(2),
    ...commonFontStyle(600, 2.5, Colors.black),
    textAlign: 'center',
  },
  topSubLabel: {
    ...commonFontStyle(400, 2, Colors._5C5C5C),
    textAlign: 'center',
  },
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: getFontSize(8),
    height: getFontSize(8),
    textAlign: 'center',
    ...commonFontStyle(400, 2.7, Colors.black),
    backgroundColor: Colors.white,
    borderRadius: getFontSize(100),
    lineHeight: 60,
    borderWidth: 1.5,
    borderColor: Colors._CDCDCD,
  },
  focusCell: {
    borderColor: Colors.primary,
    borderWidth: 1.5,
    backgroundColor: Colors?.primary,
    lineHeight: 60,
    ...commonFontStyle(400, 2.7, Colors.white),
  },
  otpContainer: {
    marginVertical: getFontSize(1.5),
    paddingHorizontal: getFontSize(2.5),
  },
  accountText: {
    ...commonFontStyle(400, 2, Colors._909090),
    textAlign: 'center',
    paddingVertical: getFontSize(3),
  },
  resendText: {
    ...commonFontStyle(600, 2, Colors.primary),
  },
});
