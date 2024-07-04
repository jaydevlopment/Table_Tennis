import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity, Image,
} from 'react-native';
import backImg from '../../../assets/images/back.png';

const Graph = ({navigation}) => {
  return (
  
    <View style={{ backgroundColor: 'black', flex: 1  }}>
          <View style={{flexDirection:'row'}}>   
         <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backImg} style={styles.imgBtn} />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
       <Text style={{color:'red',fontSize:35,textAlign:'center',fontWeight:'bold'}}>Graph Rating</Text>
       </View>
 </View>
    <View style={styles.Headers}>
      <Text style={styles.serve}>1st Serve Speed</Text>
      <Text style={styles.year}>   4W                     3M                      6M                     1Y                 YTD</Text>
    </View>

    <View style={styles.boxs}>
      <Text style={styles.boxetext}>serve</Text>
      <Text style={styles.forhandsspeed} >                               1,003</Text>
    </View>

    <View style={styles.boxs}>
      <Text style={styles.boxetext}> forehand</Text>
      <Text style={styles.forhandsspeed} >                       973</Text>
    </View>

    <View style={styles.boxs}>
      <Text style={styles.boxetext}>backhand</Text>
      <Text style={styles.forhandsspeed} >                       78%</Text>
    </View>

    <View style={styles.boxs}>
      <Text style={styles.boxetext}>volley</Text>
      <Text style={styles.forhandsspeed} >                               89%</Text>
    </View>


    <View style={styles.boxs}>
      <Text style={styles.boxetext}> overhead</Text>
      <Text style={styles.forhandsspeed} >                       89%</Text>
    </View>

    <View style={styles.boxs}>
      <Text style={styles.boxetext}>drop shot</Text>
      <Text style={styles.forhandsspeed} >                        89%</Text>
    </View>
  </View>
 
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop:10
  },
  imgBtn: {
    height: 30,
    width: 30,
    top: 18,
    marginLeft: 7
  },
  Headers: {
    width: '100%',
    height: '25%',
    backgroundColor: "#292929",
    borderRadius: 10,
    marginTop:15
  },
  serve: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    margin: 10
  },
  year: {
    fontSize: 15,
    flexDirection: 'row',
    color: 'white',
    marginTop: 120
  },
  boxs: {
    marginTop: 10,
    height: '7%',
    width: '100%',
    backgroundColor: "#292929",
    borderRadius: 10,
    flexDirection: 'row'
  },
  boxetext: {
    color: 'white',
    marginTop: 16,
    fontSize: 17,
    margin: 8,
    fontWeight: 'bold'
  },
  forhandsspeed: {
    color: '#008000',
    marginTop: 16,
    flex:1,
    marginLeft: 200,
    fontWeight: 'bold',
    fontSize: 15
  }
 });
export default Graph;
