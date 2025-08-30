// components/BottomModal.tsx

import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ViewStyle,
} from 'react-native';
import {Colors} from '@/constants/Colors';
import {hp, wp} from '@/utils/responsiveFn/responsiveFn';
import Modal from 'react-native-modal';

type BottomModalProps = {
  visible: boolean;
  style?: ViewStyle;
  onClose: () => void;
  backgroundColor?: string;
  children: React.ReactNode;
};

const BottomModal = ({
  style,
  visible,
  onClose,
  children,

  backgroundColor = '#fff',
}: BottomModalProps) => {
  return (
    <Modal
      style={styles.modal}
      onBackdropPress={onClose}
      avoidKeyboard
      isVisible={visible}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoiding}>
        <View style={[styles.container, {backgroundColor}, style]}>
          {children}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default BottomModal;

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  transparent: {
    flex: 1,
  },
  keyboardAvoiding: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    padding: hp(24),
    maxHeight: '90%',
    borderTopLeftRadius: hp(25),
    borderTopRightRadius: hp(25),
    backgroundColor: Colors.white,
  },
  closeContainer: {
    width: wp(38),
    height: hp(38),
    margin: hp(20),
    borderRadius: hp(38),
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
});
