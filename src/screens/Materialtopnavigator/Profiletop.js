import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import editimage from '../../../assets/images/edit.png';
import rightarrow from '../../../assets/images/right-arrow.png';
import {userDetailsAction} from '../../../redux/Actions/userDetailsAction';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Profiletop = ({navigation}) => {
  const dispatch = useDispatch();
  const userDetailssuccessres = useSelector(
    state => state?.userDetailsReducer?.USERDETAILSRES,
  );
  const details = userDetailssuccessres?.data
  console.log('userDetailssuccessres....', userDetailssuccessres);
  const [token, setToken] = useState('');
  const [user_role, setUserRole] = useState('')
  const [refreshing, setRefreshing] = React.useState(false);
  useFocusEffect(
    React.useCallback(() => {
      getToken();
    }, []),
  );

  useEffect(() => {
    if (token) {
      userDetailsApiCall(token);
    }
  }, [token]);

  const getToken = async () => {
    const logToken = await AsyncStorage.getItem('token');
    const user_Type = await AsyncStorage.getItem('roleType');
    setToken(logToken);
    setUserRole(user_Type);
};

const onRefresh = React.useCallback(() => {
  if (token) {
    userDetailsApiCall(token);
  }  
  setRefreshing(true);
  wait(2000).then(() => setRefreshing(false));
}, []);

  const userDetailsApiCall = token => {
    if (token) {
      // setIsLoading(true);
      const sendData = {
        token: token,
      };
      console.log('sendData', sendData);
      dispatch(userDetailsAction(sendData));
    }
  };
  const updateProfileFnc = () => {
    dispatch({ type: 'updateprofile', payload: '' });
    navigation.navigate('UpdateProfileScreen')
  };

  return (
    <View style={styles.container}>
      <View style={styles.drawline}>
        <></>
      </View>
      <ScrollView 
       refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      >
        <View style={styles.bioView}>
          <View style={styles.editBioview}>
            <Text style={styles.bioTxt}>Bio</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.editBioview}>
              <Image source={editimage} style={styles.edit} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.biodiscriptionView}>
          <Text style={styles.biodiscriptiontxt}>
            You haven't writting anything yet...
          </Text>
        </View>
        <View style={styles.bioView}>
          <View style={styles.editPersonaldetview}>
            <Text style={styles.bioTxt}>Personal details</Text>
          </View>
          <TouchableOpacity onPress={updateProfileFnc}>
            <View style={styles.editBioview}>
              <Image source={editimage} style={styles.edit} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.mainBasicview}>
          <View style={styles.basicInfoVIew}>
            <Text style={styles.Basicinfotxt}>BASIC INFO</Text>
          </View>
          <View style={styles.basicInfoVIew}>
            <Text style={styles.visibleTxt}>Visible to: only you-</Text>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Name</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.name}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>UserName</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.username}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Email</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.email}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Date of Birth</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.dob}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Phone Number</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.phone}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Address 1</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.street_address1}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Address 2</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.street_address2 === "" ? "---" : details?.street_address2}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Zip Code</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.zip_code}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Location</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.location}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Gender</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.gender}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Height</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.height}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Age</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>---</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Grip</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.grip}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Hand</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.hand}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Playing Style</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.playing_style}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Career</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.career === "" ? "---" : details?.career}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Achievement</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.achievements === "" ? "---" : details?.achievements}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Nationality</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.nationality}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Team</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.team === "" ? "---" : details?.team}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Club</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.club === "" ? "---" : details?.club}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Favorite Serve</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.favorite_serve}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Awards</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.awards === "" ? "---" : details?.awards}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawline1}>
          <></>
        </View>
        {user_role === 'player' && 
        <View style={styles.box}>
          <View style={styles.boxrow}>
            <View style={styles.style}>
              <Text style={styles.txt}>Tournament Played</Text>
            </View>
            <View style={styles.style1}>
              <Text style={styles.txt1}>{details?.tournament_played === "" ? "---" : details?.tournament_played}</Text>
            </View>
          </View>
        </View>}
        <View style={styles.drawline1}>
          <></>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  style: {
    // backgroundColor: 'orange',
    width: 170,
    justifyContent: 'center',
  },
  style1: {
    // backgroundColor: 'orange',
    width: windowWidth/2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  txt: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    paddingLeft: 15,
  },
  txt1: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '500',
    paddingRight: 15,
  },
  drawline: {
    borderBottomColor: '#fff',
    borderBottomWidth: 0.6,
    width: '100%',
    marginTop: 10,
    alignSelf: 'center',
  },
  drawline1: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.6,
    width: windowWidth,
    alignSelf: 'center',
  },
  bioView: {
    // backgroundColor:'red',
    width: windowWidth,
    height: windowHeight / 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bioTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    // paddingLeft: 10,
  },
  edit: {
    resizeMode: 'contain',
    height: 25,
    width: 25,
    tintColor: 'white',
  },
  editBioview: {
    // backgroundColor:'blue',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  biodiscriptionView: {
    // backgroundColor:'blue',
    height: windowWidth / 4,
    width: windowWidth,
  },
  biodiscriptiontxt: {
    color: 'grey',
    padding: 12,
  },
  editPersonaldetview: {
    // backgroundColor:'blue',
    height: 50,
    width: 200,
    justifyContent: 'center',
    // alignItems:'center',
    marginLeft: 15,
  },
  mainBasicview: {
    flexDirection: 'row',
    height: 40,
    // backgroundColor: 'blue',
    width: windowWidth,
    marginTop: 10,
    justifyContent:'space-between'
  },
  basicInfoVIew: {
    // backgroundColor: 'orange',
    justifyContent: 'center',
    // alignItems: 'center',
    height: 40,
    width: 120,
  },
  Basicinfotxt: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 14,
    paddingLeft: 15,
  },
  visibleTxt: {
    color: 'grey',
    // fontWeight:'bold',
    fontSize: 10,
  },
  box: {
    height: 40,
    width: windowWidth,
    // backgroundColor: 'red',
    justifyContent: 'center',
  },
  boxrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollView: {
    flex: 1,   
  },
});

export default Profiletop;
