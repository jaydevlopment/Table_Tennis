import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const VideoCard = props => {
  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.cardContent} onPress={props.onPress}>
        <Image source={props.dataList} style={styles.cardImage} />
        <View style={styles.cardTxtbody}>
          <Text style={styles.cardHeadTxt}>Video Title</Text>
          <Text style={styles.cardTxt}>
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
            dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
            lorem ipsum dolor sit amet
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#1E1E1E',
    height: '100%',
  },
  cardContent: {
    flexDirection: 'row',
    padding: 15,
    borderWidth: 1,
    borderColor: '#bb2719',
    margin: 10,
    borderRadius:5
  },
  cardImage: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
    padding: 6,
  },
  //   function code
  cardHeadTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardTxtbody: {
    flex: 1,
    margin: 10,
    numberOfLines: 1,
    height: 80,
    paddingBottom: 10,
  },
  cardTxt: {
    color: 'grey',
  },
});

export default VideoCard;
