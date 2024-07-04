import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import backImg from '../../../assets/images/back.png';

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.btnBack} onPress={onPress}>
      <Image source={backImg} style={styles.imgBtn} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnBack: {
    marginTop: 16,
    marginStart: 15,
    position: 'absolute',
  },
  imgBtn: {
    height: 30,
    width: 30,
  },
});

export default BackButton;
