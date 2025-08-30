import i18n from '../i18n/i18n';
import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export const textRTL = (): TextStyle => {
  return {textAlign: i18n.language === 'ar' ? 'right' : 'left'};
};
export const textLTR = (): TextStyle => {
  return {textAlign: i18n.language === 'en' ? 'right' : 'left'};
};
export const flipImage = (): ImageStyle => {
  return {transform: [{scaleX: i18n.language === 'en' ? 1 : -1}]};
};

export const rowReverseRTL = (): ViewStyle => {
  return {
    flexDirection: i18n.language === 'ar' ? 'row-reverse' : 'row',
  };
};
export const alignItemsRTL = (): ViewStyle => {
  return {
    alignItems: i18n.language === 'ar' ? 'flex-start' : 'flex-end',
  };
};

export const alignItemsLTR = (): ViewStyle => {
  return {
    alignItems: i18n.language === 'en' ? 'flex-end' : 'flex-start',
  };
};

export const alignSelfRTL = (): ViewStyle | TextStyle => {
  return {
    alignSelf: i18n.language === 'ar' ? 'flex-start' : 'flex-end',
  };
};

export const alignItemsFlexRTL = (): ViewStyle => {
  return {
    alignItems: i18n.language === 'ar' ? 'flex-end' : 'flex-start',
  };
};

export const marginRTLRight = (number: any): ViewStyle => {
  return {
    marginRight: i18n.language === 'ar' ? 0 : number,
    marginLeft: i18n.language === 'en' ? 0 : number,
  };
};

export const paddingRTLRight = (number: any): ViewStyle => {
  return {
    paddingRight: i18n.language === 'ar' ? 0 : number,
    paddingLeft: i18n.language === 'en' ? 0 : number,
  };
};

export const marginRTLLeft = (number: any): ViewStyle => {
  return {
    marginLeft: i18n.language === 'ar' ? 0 : number,
    marginRight: i18n.language === 'en' ? 0 : number,
  };
};

export const paddingRTLLeft = (number: any): ViewStyle => {
  return {
    paddingLeft: i18n.language === 'ar' ? 0 : number,
    paddingRight: i18n.language === 'en' ? 0 : number,
  };
};

export const rightRTL = (number: any): ViewStyle => {
  return {
    right: i18n.language === 'ar' ? undefined : number,
    left: i18n.language === 'en' ? undefined : number,
  };
};
export const leftRTL = (number: any): ViewStyle => {
  return {
    left: i18n.language === 'ar' ? undefined : number,
    right: i18n.language === 'en' ? undefined : number,
  };
};

const Theme = {
  textRTL,
  alignSelfRTL,
  rowReverseRTL,
  marginRTLLeft,
  paddingRTLLeft,
  alignItemsRTL,
  alignItemsFlexRTL,
  paddingRTLRight,
  marginRTLRight,
};

export default Theme;
