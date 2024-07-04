import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CardArticles = props => {

  // console.log(props, '...');
  return (
    <TouchableOpacity
      style={styles.mainCard}
      onPress={() => {
        console.warn('Pressed');
      }}>
      <View style={styles.internalCard}>
        <Image source={Image} style={styles.articleThumbnail} />
        <View style={styles.articleTxt}>
          <Text style={styles.textHeading}>{props.heading}</Text>
          <Text style={styles.txtBody}>{props.textBody}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainCard: {
    paddingBottom: 20,
    paddingLeft: 100,
    paddingRight: 50,
  },
  internalCard: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    marginRight:50,
    borderColor:'#C2C9D1'
  },
  articleThumbnail: {
    height: 100,
    width: 80,
    alignSelf: 'center',
  },
  articleTxt: {
    width: 225,
    padding: 10,
  },
  textHeading: {
    color: 'white',
    fontWeight: 'bold',
  },
  txtBody: {
    marginTop:5,
    color: 'grey',
    fontSize:13
    //  textAlign: 'center',
  },
});

export default CardArticles;
