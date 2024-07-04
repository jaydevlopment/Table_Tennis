import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import Drawer from '../../../assets/images/menu.png';
import Bell from '../../../assets/images/bell.png';

const Header = props => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => {
          console.warn('Open Side Drawer');
        }}>
        <View><Image source={Drawer} style={styles.drawer} /></View>
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{props.name}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.warn('Open Notification');
        }}>
        <View>
          <Image source={Bell} style={styles.drawer} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor:'#000'
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  drawer: {
    height: 27,
    width: 27,
    tintColor:'white'
  },
});

export default Header;
