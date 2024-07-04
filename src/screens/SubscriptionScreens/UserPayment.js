import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Modal,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SubcribePlanAction } from '../../../redux/Actions/SubcribePlanAction';
import { useFocusEffect } from '@react-navigation/native';
import remove from '../../../assets/images/remove.png';
import icon from '../../../assets/users/ttnett.jpg';
import check from '../../../assets/images/check.png';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const UserPayment = ({navigation, ...props }) => {

  const subcribeplansuccessres = useSelector( state =>
    // console.log('state',state) 
    state?.SubcribeplanReducer?.SUBCRIBEPLANRES,
  );

  const subcribe = subcribeplansuccessres?.data
  console.log('subcribeplanpage....', subcribeplansuccessres);
  const [token, setToken] = useState('');
  const [user_role, setUserRole] = useState('')
  
  useFocusEffect(
    React.useCallback(() => {
      console.log('inside useeffect');
      getToken();
    }, []),
  );
  
  const getToken = async () => {
    const logToken = await AsyncStorage.getItem('token');
    const user_Type = await AsyncStorage.getItem('roleType');
    setUserRole(user_Type);
    setToken(logToken);
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.backView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.dotsstyle} source={remove} />
        </TouchableOpacity>
      </View>
      <View style={styles.IconView}>
        <Image style={styles.Icon} source={icon} />
      </View>
      <View style={styles.headingtxtview}>
        <Text style={styles.headingtxt}>Subscribe For Live Stream</Text>
      </View >
      <View style={{alignSelf:'center'}}>
      <View style={styles.rows}>
        <View style={styles.imageviews}>
          <Image style={styles.checkstyle} source={check} />
        </View>
        <View style={styles.txtViews}>
          <Text style={styles.txtheading}>
            Access to your full workout history
          </Text>
        </View>
      </View>
      <View style={styles.rows}>
        <View style={styles.imageviews}>
          <Image style={styles.checkstyle} source={check} />
        </View>
        <View style={styles.txtViews}>
          <Text style={styles.txtheading}>
            Year-round analysis and skill ratings
          </Text>
        </View>
      </View>
      <View style={styles.rows}>
        <View style={styles.imageviews}>
          <Image style={styles.checkstyle} source={check} />
        </View>
        <View style={styles.txtViews}>
          <Text style={styles.txtheading}>Intelligent traning program</Text>
        </View>
      </View>
      <View style={styles.rows}>
        <View style={styles.imageviews}>
          <Image style={styles.checkstyle} source={check} />
        </View>
        <View style={styles.txtViews}>
          <Text style={styles.txtheading}>Personalized daily workouts</Text>
        </View>
      </View>
      </View>

      <View style={styles.lowerhedingView}>
        <Text style={[styles.lowerheding, {paddingLeft:5}]}>
          A full year of traning for less than
        </Text>
        <Text style={styles.lowerheding}>
          one session with a personal trainer.
        </Text>
      </View>
      <View
        style={{
          height: 20,
          flexDirection: 'row',
          marginTop: 105,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <Text style={styles.txt}>Includes </Text>
        </View>
        <View>
          <Text style={styles.txtmiddle}>7-day free trial</Text>
        </View>
        <View>
          <Text style={styles.txt}> period. Cancel anytime.</Text>
        </View>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={styles.subscribe} onPress={() => navigation.navigate('Payment')}>
        <Text style={{fontWeight: 'bold', color: 'white'}}>Subscribe Now</Text>
        <Text style={{fontWeight: '500', color: 'white'}}>
          5.00 $ per month
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subscribe} onPress={() => navigation.navigate('Payment')}>
        {/* <Text style={{fontWeight: 'bold', color: 'white'}}>Subscribe Now</Text>
        <Text style={{fontWeight: '500', color: 'white'}}>
          55.00 $ per year
        </Text> */}
        <Text style={{fontWeight: '500', color: 'white'}}>{subcribe?.title}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{marginTop: 30, alignItems: 'center'}}>
        <Text style={{fontSize: 11, fontWeight: '500', color: 'grey'}}>
          MORE OPTIONS
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  subscribe:{
  
    height: 50,
    backgroundColor: 'red',
    width: Width - 250,
    marginHorizontal: 16,
    borderRadius: 5,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
  },
  backView: {
    height: 70,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  dotsstyle: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    marginRight: 20,
  }, 
  txt1: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    paddingRight: 15,
  },
  Icon: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  IconView: {
    height: 100,
    // backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingtxtview: {
    height: 50,
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent:'center',
    alignSelf:'center'
  },
  headingtxt: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFDFA',
  },
  txtheading: {
    fontSize: 13,
    fontWeight: '600',
    color: 'grey',
  },
  checkstyle: {
    height: 10,
    width: 10,
    tintColor: 'white',
  },
  lowerhedingView: {
    height: 50,
    // backgroundColor: 'red',
    width: Width - 100,
    marginTop: 50,
    alignSelf: 'center',
    alignItems:'center'
  },
  lowerheding: {
    color: 'white',
    fontSize: 15,
    padding: 2,
    fontWeight: '500',
  },
  txt: {
    fontSize: 10,
    color: 'grey',
    fontWeight: '500',
  },
  txtmiddle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  rows: {
    flexDirection: 'row',
    marginTop: 25,
  },
  imageviews: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtViews: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -3,
    marginLeft: 5,
  },
});

export default UserPayment;
