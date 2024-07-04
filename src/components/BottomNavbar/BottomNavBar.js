import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import homeNavImg from '../../../assets/images/home-24.png';
import Team from '../../../assets/images/team-24.png';
import Training from '../../../assets/images/ping-pong-24.png';
import Profile from '../../../assets/images/user-24.png';
import Extra from '../../../assets/images/chat-24.png';
const BottomNavBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        style={styles.home}
        onPress={() => console.warn('Team')}>
        <Image style={styles.BottomNavBarimg} source={Team} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.home}
        onPress={() => console.warn('training')}>
        <Image style={styles.BottomNavBarimg} source={Training} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.home}
        onPress={() => {
          navigation.navigate('HomePlayer');
        }}>
        <Image style={styles.BottomNavBarimg} source={homeNavImg} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.home}
        onPress={() => console.warn('Chat')}>
        <Image style={styles.BottomNavBarimg} source={Extra} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.home}
        onPress={() => {
          // console.warn('profile');
          navigation.navigate('UserMenu');
        }}>
        <Image source={Profile} />
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

export default BottomNavBar;
