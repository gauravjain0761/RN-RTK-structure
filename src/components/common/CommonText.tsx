import React, {useMemo} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Colors} from '@/constants/Colors';
import {commonFontStyle} from '@/utils/responsiveFn/responsiveFn';

interface CommonTextProps extends TextProps {
  text?: string | any;
  children?: React.ReactNode;
}

const CommonText: React.FC<CommonTextProps> = ({
  text,
  children,
  style,
  ...rest
}) => {
  const {t} = useTranslation();

  const translatedText = useMemo(() => {
    return text ? t(text) : '';
  }, [text, t]);

  return (
    <Text style={[styles.commonText, style]} allowFontScaling={false} {...rest}>
      {translatedText}
      {children}
    </Text>
  );
};

export default React.memo(CommonText);

const styles = StyleSheet.create({
  commonText: {
    ...commonFontStyle(600, 3.4, Colors.black),
  },
});
