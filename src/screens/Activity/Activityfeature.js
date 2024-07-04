import React, { useRef, Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
  Image,
  Text,
  TouchableOpacity
} from "react-native";

import backImg from '../../../assets/images/back.png';
import ping from '../../../assets/images/keytenis.png';
import ball from '../../../assets/images/keyball.png';
import table from '../../../assets/images/keytable.png';
import Swings from '../../../assets/images/keyswings.png';
import Serve from '../../../assets/images/servekeyfeatures.png';
import arrow from '../../../assets/images/arrow4.png';
const images = [
  { id: 1, img: require("../../../assets/images/download.png"), color: "#33ccff" },
  { id: 2, img: require("../../../assets/images/download.png"), color: "brown" },

  { id: 3, img: require("../../../assets/images/download.png"), color: "#33ccff" },
  { id: 4, img: require("../../../assets/images/download.png"), color: "#33ccff" },

  { id: 5, img: require("../../../assets/images/download.png"), color: "#33ccff" },
]

export default Activityfeature = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  let { width: windowWidth, height: windowHeight } = useWindowDimensions();
  windowHeight = windowHeight - 300;
  return (
      <SafeAreaView style={styles.container}>

        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backImg} style={styles.imgBtn} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.toptext}>Key Features</Text>
        </View>
         <ScrollView>
        <View style={[styles.scrollContainer, { height: windowHeight }]}>
          <ScrollView
            horizontal={true}
            style={styles.scrollViewStyle}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x : scrollX } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={16}>
            {images.map((image, imageIndex) => {
              return (
                <Animated.View
                  style={{ width: windowWidth, }}
                  key={imageIndex}
                > 
                  <Image source={image.img} style={styles.card}>
                  </Image>

                </Animated.View>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.indicatorContainer}>
          {
            images.map((image, imageIndex) => {
              const width = scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * (imageIndex),
                  windowWidth * (imageIndex + 1),
                ],
                outputRange: [8, 16, 8],
                extrapolate: "clamp",
              })
              return (
                <Animated.View style={[styles.normalDots, { width }, { backgroundColor: image.color }]} />
              );
            })
          }
          <View style={styles.bottom}>
            <View style={styles.bottomitems}>
              <TouchableOpacity onPress={() => {
              navigation.navigate('Shots')
            }}>
                <View style={styles.bottominnerview}>
                  <Image style={styles.pingstyle} source={ping} />
                  <Text style={styles.keyname}>Shots</Text>
                  <Text style={styles.activity}>10 ACTIVITIES</Text>
                  <Image style={styles.arrowimage} source={arrow} />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomitems}>
              <TouchableOpacity onPress={() => {
              navigation.navigate('Balls')
            }}>
                <View style={styles.bottominnerview}>
                  <Image style={styles.pingstyle} source={ball} />
                  <Text style={styles.keyname}>Balls</Text>
                  <Text style={styles.activity}>6 ACTIVITIES</Text>
                  <Image style={styles.arrowimage} source={arrow} />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomitems}>
              <TouchableOpacity onPress={() => {
              navigation.navigate('Table')
            }}>
                <View style={styles.bottominnerview}>
                  <Image style={styles.pingstyle} source={table} />
                  <Text style={styles.keyname}>Table</Text>
                  <Text style={styles.activity}>43 ACTIVITIES</Text>
                  <Image style={styles.arrowimage} source={arrow} />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomitems}>
              <TouchableOpacity onPress={() => {
              navigation.navigate('Serve')
            }}>
                <View style={styles.bottominnerview}>
                  <Image style={styles.pingstyle} source={Serve} />
                  <Text style={styles.keyname}>Serve</Text>
                  <Text style={styles.activity}>30 ACTIVITIES</Text>
                  <Image style={styles.arrowimage} source={arrow} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomitems}>
              <TouchableOpacity onPress={() => {
              navigation.navigate('Swings')
            }}>
                <View style={styles.bottominnerview}>
                  <Image style={styles.pingstyle} source={Swings} />
                  <Text style={styles.keyname}>Swings</Text>
                  <Text style={styles.activity}>19 ACTIVITIES</Text>
                  <Image style={styles.arrowimage} source={arrow} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imgBtn: {
    height: 30,
    width: 30,
    top: 18,
    marginLeft: 7
  },
  bottom: {
    height: '55%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    margin: 8,
    marginTop: 6,
    marginLeft: -230,
  },
  bottomitems: {
    width: '40%',
    height: '60%',
    padding: 5,
  },
  bottominnerview: {
    // flex:1,
    backgroundColor: '#292929',
    height: 130,
    borderRadius: 4
  },
  keyname: {
    marginTop: 20,
    fontWeight: "600",
    fontSize: 15,
    color: 'white',
    marginLeft: 10
  },
  activity: {
    marginTop: 5,
    fontSize: 12,
    marginLeft: 10,
    color: 'white'
  },
  arrowimage: {
    flexDirection: 'row',
    height: 20,
    width: 20,
    marginHorizontal: 155,
    marginVertical: -25,
  },
  pingstyle: {
    marginTop: 12,
    marginLeft: 10,
    backgroundColor: 'green',
    borderRadius: 200 / 2,
    height: 40,
    width: 40,
  },
  toptext: {
    color: '#ffefd5',
    fontSize: 40,
    top: -15,
    marginLeft:18,
    marginTop: 40,
    width: "100%",
    fontWeight: "600",
    fontFamily: "Avenir",
    fontWeight: 'bold',
  },
  scrollContainer: {
    shadowColor: "#6A6C6E",
  },
  card: {
    flex: 1,
    marginVertical: 5,
    width: 390,
    overflow: "hidden",
    alignSelf: "center",
    marginBottom: 320,
    borderRadius: 7,
  },
  indicatorContainer: {
    top: -315,
    flexDirection: "row",
    //justifyContent:"center",
    // alignItems:"center"
    marginBottom: 200,
    marginLeft: 160
  },
  normalDots: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  // textAreaContainer:{
  //     width:"100%",
  //     marginBottom:10,
  // },
  // textView:{
  //     position:"absolute",
  //     fontSize:22,
  //     fontFamily:"Avenir",
  //     fontWeight:"600",
  //     textAlign:"center",
  //     width:"100%"
  // }


});
