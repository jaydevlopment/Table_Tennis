import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';

const promotionalVideoComponent = props => {
  return (
    <View style={styles.carousal}>
      <Text style={styles.txtTraining}>{props.name}</Text>
      <FlatList
        data={props.data}
        keyExtractor={props.keyExtractor}
        renderItem={props.renderItem}
        horizontal={props.horizontal}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#000',
    height: '100%',
  },
  drawLine: {
    borderBottomColor: '#C2C9D1',
    borderBottomWidth: 0.9,
    width: 300,
    marginTop: 25,
    alignSelf: 'center',
  },
  carousal: {
    height: 150,
  },
  coachThumbnail: {
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  txtTraining: {
    color: 'white',
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 7,
    fontWeight: 'bold',
    fontSize: 16,
  },
  articleView: {},
  articles: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  addBtn: {
    backgroundColor: 'white',
  },
  mainCard: {
    width: widthScreen,
    alignSelf: 'center',
    height: heightScreen,
    // paddingBottom: 20,
    // paddingLeft: 100,
    // paddingRight: 50,
  },
  internalCard: {
    width: widthScreen - 50,
    alignSelf: 'center',
    height: 120,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    borderColor: '#C2C9D1',
    marginVertical: 15,
    padding: 5,
  },
  articleThumbnail: {
    height: 30,
    width: 30,
    // alignSelf: 'center',
    resizeMode: 'contain',
    tintColor: 'white',
  },
  articleTxt: {
    width: widthScreen / 1.6,
    // backgroundColor:'red'
  },
  textHeading: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  txtBody: {
    color: 'grey',
    fontSize: 12,
    textAlign: 'left',
    flexWrap: 'wrap',
    flexShrink: 1,
    paddingLeft: 5,
  },
  AdminvidView: {
    // backgroundColor:'white',
    height: 80,
    width: widthScreen / 3,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // elevation:1,
    // shadowColor:'white',
    // shadowOpacity:10,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default promotionalVideoComponent;
