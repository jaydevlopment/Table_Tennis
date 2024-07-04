import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import backImg from '../../../assets/images/back.png';


const WIDTH = Dimensions.get('window').width;
const TraningVideos = ({navigation}) => {

    return (
      <View style={styles.item}>
         <View style={styles.container}>
        <View style={styles.headercontent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backImg} style={styles.imgBtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.SignUpsty}>
          <Text style={styles.toolbarTxt}>Training Videos</Text>
        </View>
      
      </View>
      <View>
          <Text style={{alignItems:'center',fontSize:25,color:'white',alignSelf:'center', marginVertical:350,fontWeight:'bold'}}>Empty data </Text>
        </View>
      </View>
    );
  };


const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    height: 40,
    backgroundColor: 'black',
    flexDirection: 'row',
    padding: 5,
  },
  headercontent: {
    justifyContent: 'flex-start',
  },
  SignUpsty: {
    marginHorizontal: 110,
  },
  toolbarTxt: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imgBtn: {
    height: 30,
    width: 30,
  },
});

export default TraningVideos