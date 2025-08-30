import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '@/constants/Colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@/utils/responsiveFn/responsiveFn';

const Loader = () => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.indicator}>
        <ActivityIndicator size={'large'} color={Colors.black} />
      </View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  modalContainer: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  indicator: {
    width: 100,
    height: 100,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 1,
  },
});
