import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';


const VideoScreen = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <Text>VideoScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
 });

export default VideoScreen;
