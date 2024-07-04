import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';


const SkillRatings = ({navigation}) => {
 
  return (
    // <View style={styles.container}>
    //   <Text style={{color:'red'}}>skills rating</Text>
    // </View>
 
    <View style={{ backgroundColor: 'black', flex: 1 ,marginTop:10 }}>
      
    <View style={styles.Headers}>
      <Text style={styles.serve}>1st Serve Speed</Text>
      <Text style={styles.year}>   4W                     3M                      6M                     1Y                 YTD</Text>
    </View>

    <View style={styles.boxs}>
      <Text style={styles.boxetext}>Forehands In</Text>
      <Text style={styles.forhandsspeed} >              1,003</Text>
    </View>

    <View style={styles.boxs}>
      <Text style={styles.boxetext}>Backhands In</Text>
      <Text style={styles.forhandsspeed} >              973</Text>
    </View>

    <View style={styles.boxs}>
      <Text style={styles.boxetext}>1st Serves In</Text>
      <Text style={styles.forhandsspeed} >              78%</Text>
    </View>

    <View style={styles.boxs}>
      <Text style={styles.boxetext}>2nd Serves In</Text>
      <Text style={styles.forhandsspeed} >             89%</Text>
    </View>

  </View>
 
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  Headers: {
    width: '100%',
    height: '40%',
    backgroundColor: "#292929",
    borderRadius: 10,
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
    height: '11%',
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
export default SkillRatings;
