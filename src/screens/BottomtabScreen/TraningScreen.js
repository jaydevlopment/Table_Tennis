import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Training from '../../../assets/images/ping-pong-24.png';

const TrainingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        style={styles.home}
        onPress={() => console.warn('training')}>
        <Image style={styles.BottomNavBarimg} source={Training} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    zIndex: 50,
    elevation: 15,
    opacity: 15,
    backgroundColor:'black'
  },
  BottomNavBarimg:{
resizeMode:'contain',
tintColor:'white'
  },
});

export default TrainingScreen;
