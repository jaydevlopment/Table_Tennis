import React, { useEffect, useState } from 'react';
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
  ActivityIndicator
} from 'react-native';

import Header from '../../../components/Header/Header';
import Card from '../../../components/Cards/HeaderCard';
import Thumbnail from '../../../components/Cards/DataCard';
import CardArticles from '../../../components/Cards/CardArticles';
import BottomNavBar from '../../../components/BottomNavbar/BottomNavBar';
import { useDispatch, useSelector } from 'react-redux';
import image from '../../../../assets/images/OTPcode.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ArticalListAction } from '../../../../redux/Actions/ArticalListAction';
import { useFocusEffect } from '@react-navigation/native';
import { GetPromotionalVideolListAction } from '../../../../redux/Actions/GetPromotionalVideolListAction';
import Video from 'react-native-video';
import { useAuthContext } from '../../../context/authContext';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const HomeForUser = ({navigation}) => {
  const dispatch = useDispatch();
  const GetArticlelistsuccessres = useSelector(state => state?.ArticalListReducer?.ARTICALLISTRES);
  const GetPromotionalVideolListsuccessres = useSelector(state => state?.GetPromotionalVideolListReducer?.PROMOTIONALVIDEORES);
  //console.log('GetArticlelistsuccessres.... ', GetPromotionalVideolListsuccessres);

  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const authContext = useAuthContext;
  useFocusEffect(
    React.useCallback(() => {
      getToken();
    }, []),
  );

  useEffect(() => {
    if (token) {
      console.log('token',token)
      GetPromotionalVideoListApicall(token)
      GetArticleListApicall(token)
    }
  }, [token]);
  useEffect(() => {
    if (GetPromotionalVideolListsuccessres) {
      setIsLoading(false);
    }
  }, [GetPromotionalVideolListsuccessres]);

  useEffect(() => {
    if (GetArticlelistsuccessres) {
      setIsLoading(false);
    }
  }, [GetArticlelistsuccessres]);

  const getToken = async () => {
    const logToken = await AsyncStorage.getItem('token');
    setToken(logToken);
    console.log('logToken..', logToken);
  };
  
  const GetArticleListApicall = async () => {
    const sessionTime = await AsyncStorage.getItem('sessionTime');
    const currenttime = new Date(new Date().getTime()).toLocaleTimeString();
    console.log(sessionTime);
    console.log(currenttime);
    console.log(sessionTime > currenttime);
    if (sessionTime > currenttime) {
      console.log('inside api list');
      if (token) {
        setIsLoading(true);
        const sendData = {
          token: token,
        };
        // console.log('sendData', sendData);
        dispatch(ArticalListAction(sendData));
      }
    } else {
      console.log('inside else.... list');
      dispatch({type: 'Login', payload: ''});
      dispatch({type: 'promotionalvideo', payload: ''});
      dispatch({type: 'articallist', payload: ''});
      dispatch({ type: 'userdetails', payload: '' });
      AsyncStorage.removeItem('token');
      AsyncStorage.removeItem('sessionTime');
      navigation.navigate('Login');
    }
  };

  const GetPromotionalVideoListApicall = (token) => {
    if (token) {
     setIsLoading(true);
      const sendData = {
        token: token,
      };
       console.log('sendData', sendData);
       dispatch(GetPromotionalVideolListAction(sendData));
    }
  };
  
  const renderFnc2 = item => {
    return (
      <View style={styles.AdminvidView}>
        {/* <Text style={{color:'red'}}>{item.title}</Text> */}
        {/* <Image  style={{height:100,width:100, resizeMode:'contain'}} source={{uri: item.video}}/> */}
        <Video
          paused={true}
          source={{uri: item.video}}
          style={styles.backgroundVideo}
        />
      </View>
    );
  };

  const imgs = [image, image, image, image, image, image, image];
  return (
    <View style={styles.mainContainer}>
      {/* <Header name={"Home for User"} /> */}
      <ScrollView>
      <View style={styles.carousal}>
          <Text style={styles.txtTraining}>Practice Videos</Text>
          <ScrollView horizontal={true}>
            <View style={styles.coachThumbnail}>
              {imgs.map((src, index) => (
                <Thumbnail key={index} thumbnail={src} />
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={styles.carousal}>
          <Text style={styles.txtTraining}>Training Videos</Text>
          <ScrollView horizontal={true}>
            <View style={styles.coachThumbnail}>
              {imgs.map((src, index) => (
                <Thumbnail key={index} thumbnail={src} />
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={styles.carousal}>
          <Text style={styles.txtTraining}>Admin's Choice</Text>

          {isLoading ? (
            <View style={styles.AdminvidView}>
              <ActivityIndicator color="white" />
            </View>
          ) : (
          <FlatList
            data={GetPromotionalVideolListsuccessres?.data?.user}
            keyExtractor={item => item?.id}
            renderItem={({item}) => renderFnc2(item)}        
            horizontal
          />
          )}
        </View>
        <View style={styles.articleView}>
          <Text style={styles.txtTraining}>Feature Articles</Text>
          {isLoading ? (
            <View style={styles.AdminvidView}>
              <ActivityIndicator color="white" />
            </View>
          ) : (
          <FlatList
            data={GetArticlelistsuccessres?.data?.user}
            keyExtractor={item => item?.id}
            renderItem={({ item }) => (
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => {
                    console.warn('Pressed');
                  }}>
                  <View style={styles.internalCard}>
                    <View style={{ height: 120, width: 100, justifyContent: 'center', alignItems: 'center' }}>
                      <Image source={{ uri: item?.image }} style={styles.articleThumbnail} />
                    </View>
                    <View style={styles.articleTxt}>
                      <View style={{ marginTop: 6 }}>
                        <Text style={styles.textHeading}>{item?.title}</Text>
                      </View>
                      <View style={{ marginTop: 6 }}>
                        <Text numberOfLines={5} style={styles.txtBody}>
                          {item?.content}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
          )}
        </View>
      </ScrollView>
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
    padding: 5
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
    paddingLeft: 5
  },
  txtBody: {
    color: 'grey',
    fontSize: 12,
    textAlign: 'left',
    flexWrap: 'wrap',
    flexShrink: 1,
    paddingLeft: 5
  },
  AdminvidView: {
    height: 80,
    width: widthScreen / 3,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default HomeForUser;
