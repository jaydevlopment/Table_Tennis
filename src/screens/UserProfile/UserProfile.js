import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import backImg from '../../../assets/images/back.png';
import { userDetailsAction } from '../../../redux/Actions/userDetailsAction';


const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const UserProfile = ({ navigation, ...props }) => {

  const userDetailssuccessres = useSelector(
    state => state?.userDetailsReducer?.USERDETAILSRES,
  );
  const details = userDetailssuccessres?.data
  console.log('userdetailspage....', userDetailssuccessres);
  const [user_role, setUserRole] = useState('')

  // useFocusEffect(
  //   React.useCallback(() => {
  //     console.log('inside useeffect');
  //     getToken();
  //   }, []),
  // );

  // const getToken = async () => {
  //   const user_Type = await AsyncStorage.getItem('roleType');
  //   setUserRole(user_Type);
  // };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.headercontent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backImg} style={styles.imgBtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.SignUpsty}>
          <Text style={styles.toolbarTxt}>User Details</Text>
        </View>
      </View>
      <ScrollView>
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
        {/* <View style={styles.personal}>
          <View style={styles.innerContainer}>
            <View style={styles.box}>
              <Text style={styles.list}>Name: {details?.name}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.list}>Username: {details?.username}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.list}>Email: {details?.email}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.list}>Date of Birth: {details?.dob}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.list}>Phone Number: {details?.phone}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.list}>Nationality: {details?.nationality}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.list}>Address 1: {details?.street_address1}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.list}>Address 2: {details?.street_address2}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.list}>Zip code: {details?.zip_code}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.list}>Location: {details?.location}</Text>
            </View>

          </View>
        </View> */}
        {/* <View style={styles.drawLine}>
          <></>
        </View> */}
        {user_role === 'user' ? null : (
          <View style={styles.professional}>
            <View style={{height:40,width:Width,justifyContent:'center',backgroundColor:'#1E1E1E',marginTop:5,marginBottom:5}}>
            <Text style={styles.title}>Professional Details</Text>
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
          </View>)}
        {/* <View style={styles.drawLine}>
          <></>
        </View> */}
        <View style={styles.purchasedPlan}>
          <View style={{height:40,width:Width,justifyContent:'center',backgroundColor:'#1E1E1E',marginTop:5,marginBottom:5}}>
          <Text style={styles.title}>Subscription Details</Text>
            </View>
          <View style={styles.innerContainer}>
            <View style={styles.box}>
              <Text style={styles.list}>
                Subscription (annual | monthly): {details?.subscription}
              </Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.list}>
                Subscription Date: {details?.subscribedDate}
              </Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.list}>Expiry Date: {details?.expiryDate}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <BottomNavBar /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#000',
    height: '100%',
    padding: 5,
  },
  drawLine: {
    borderBottomColor: '#C2C9D1',
    borderBottomWidth: 0.9,
    width: Width,
    // marginTop: 25,
    alignSelf: 'center',
  },
  title: {
    color: '#C2C9D1',
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 15,
    marginTop: 5
  },
  innerContainer: {
    padding: 15,
  },
  list: {
    color: '#C2C9D1',
    fontSize: 15,
    padding: 3
  },
  box: {
    borderWidth: 1,
    height: 30,
    width: Width - 60,
    borderRadius: 5,
    borderColor: 'white',
    paddingLeft: 5,
    margin: 5,
    alignSelf: 'center'
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
  box: {
    height: 40,
    width: Width,
    // backgroundColor: 'red',
    justifyContent: 'center',
  },
  boxrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  style: {
    // backgroundColor: 'orange',
    width: 170,
    justifyContent: 'center',
  },
  style1: {
    // backgroundColor: 'orange',
    width: Width/2,
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
    width: Width,
    alignSelf: 'center',
  },

});

export default UserProfile;
