import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import Button from '../../components/CustomButton/Button';
import {SignupAction} from '../../../redux/Actions/SignupAction';
import {useDispatch, useSelector} from 'react-redux';
import backImg from '../../../assets/images/back.png';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen3 = ({navigation}) => {

  const dispatch = useDispatch();
  const StepOneResData = useSelector( state => state?.SignUpReducer?.STEPONERES );
  console.log("StepOneResData...",StepOneResData)
  const StepTwoResData = useSelector( state => state?.SignUpReducer?.STEPTWORES );
  console.log("StepTwoResData...",StepTwoResData)
  const Signupsuccessres = useSelector( state => state?.SignUpReducer?.SIGNUPRES );

  const [role, setRole] = useState('');
  const [streetaddress1, setStreetaddress1] = useState('');
  const [streetaddress2, setStreetaddress2] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [startdate, setStartdate] = useState('');
  const [location, setLocation] = useState('');
  const [errorField, setErrorField] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [stepOneData, setStepOneData] = useState({});
  const [stepTwoData, setStepTwoData] = useState({});

  const ADDRESS1_REQUIRED = 'Address 1 is required';
  const ZIPCODE_REQUIRED = 'zip code is required';
  const LOCATION_REQUIRED = 'location is required';

  useEffect(() => {
    if (Signupsuccessres) {
      if (Signupsuccessres?.status === 1) {
        setIsLoading(false);
        dispatch({ type: 'StepOne', payload: '' });
        dispatch({ type: 'StepTwo', payload: '' });
        navigation.navigate('Login');
      } else if (Signupsuccessres?.status !== 1) {
        setIsLoading(false);
      }
    }
  }, [Signupsuccessres]);

  useEffect(() => {
    if (StepOneResData) {
     setStepOneData(StepOneResData)
     setRole(StepOneResData.role)
    }
  }, [StepOneResData]);

  useEffect(() => {
    if (StepTwoResData) {
     setStepTwoData(StepTwoResData)
    }
  }, [StepTwoResData]);

  const signUpCoachApiCall = () => {
    setIsLoading(true);
    const sendData = {
      name: stepOneData.fullName,
      username: stepOneData.username,
      user_type: stepOneData.role,
      email: stepOneData.email,
      password: stepOneData.password,
      confirmpassword: stepOneData.cnfpassword,
      dob: stepOneData.dob,
      gender: stepOneData.gender,
      grip: stepTwoData.grip,
      hand: stepTwoData.hand,
      phone: stepOneData.phone,
      playing_style: stepTwoData.playingstyle,
      favorite_serve: stepTwoData.favoriteserve,
      height: stepTwoData.height,
      location: location,
      street_address1: streetaddress1,
      street_address2: streetaddress2,
      nationality: stepOneData.nationality,
      zip_code: zipcode,
      team: stepTwoData.team,
      club: stepTwoData.club,
      awards: stepTwoData.awards,
      achievements: stepTwoData.achievement,
      career: stepTwoData.career,
      startdate: startdate,
    };
    console.log('sendData.... ', sendData);
    dispatch(SignupAction(sendData));
  };
  const signUpPlayerApiCall = () => {
    setIsLoading(true);
    const sendData = {
      name: stepOneData.fullName,
      username: stepOneData.username,
      user_type: stepOneData.role,
      email: stepOneData.email,
      password: stepOneData.password,
      confirmpassword: stepOneData.cnfpassword,
      dob: stepOneData.dob,
      gender: stepOneData.gender,
      tournament_played: stepTwoData.tournamentPlayed,
      grip: stepTwoData.grip,
      hand: stepTwoData.hand,
      phone: stepOneData.phone,
      playing_style: stepTwoData.playingstyle,
      favorite_serve: stepTwoData.favoriteserve,
      height: stepTwoData.height,
      location: location,
      street_address1: streetaddress1,
      street_address2: streetaddress2,
      nationality: stepOneData.nationality,
      zip_code: zipcode,
      team: stepTwoData.team,
      club: stepTwoData.club,
      awards: stepTwoData.awards,
      achievements: stepTwoData.achievement,
      career: stepTwoData.career,
      startdate: startdate,
    };
    console.log('sendData.... ', sendData);
    dispatch(SignupAction(sendData));
  };
  const signUpuserApiCall = () => {
    setIsLoading(true);
    const sendData = {
      name: stepOneData.fullName,
      username: stepOneData.username,
      user_type: stepOneData.role,
      email: stepOneData.email,
      password: stepOneData.password,
      confirmpassword: stepOneData.cnfpassword,
      dob: stepOneData.dob,
      phone: stepOneData.phone,
      gender: stepOneData.gender,
      location: location,
      street_address1: streetaddress1,
      street_address2: streetaddress2,
      nationality: stepOneData.nationality,
      zip_code: zipcode,
      startdate: startdate,
    };
    console.log('sendData.... ', sendData);
    dispatch(SignupAction(sendData));
  };
  const apicalling = () => {
    if (
      !streetaddress1 > 0 ||
      !zipcode > 0 ||
      !location > 0
    ) {
      setErrorField(true);
    } else if (role === 'coach') {
      console.log('coach....', role); 
      signUpCoachApiCall();
    } else if (role === 'player') {
      signUpPlayerApiCall();
    } else {
      signUpuserApiCall();
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.headercontent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backImg} style={styles.imgBtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.SignUpsty}>
          {role === 'user' ? (
            <Text style={styles.toolbarTxt}>Step 2</Text>
          ) : (
            <Text style={styles.toolbarTxt}>Step 3</Text>
          )}
        </View>
      </View>
      <ScrollView style={{marginTop: 5}} showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 15}}>
          <Text style={styles.inputTitleStyle}>Address 1 *</Text>
          <View
            style={[
              styles.txtinpView,
              {
                borderColor: !streetaddress1 > 0 && errorField ? 'red' : '#C0C0C0',
              },
            ]}>
            <TextInput
              value={streetaddress1}
              placeholderTextColor="grey"
              style={styles.txtinp}
              onChangeText={text => {
                // storeData();
                setStreetaddress1(text)
              }
              }
              placeholder=" Address 1..."
            />
          </View>
          {errorField && !streetaddress1.length > 0 && (
            <Text
              style={{
                color: 'red',
                marginLeft: 20,
              }}>
              {ADDRESS1_REQUIRED}
            </Text>
          )}
          <Text style={styles.inputTitleStyle}>Address 2 (optional)</Text>
          <View
            style={[
              styles.txtinpView,
              {
                borderColor: '#C0C0C0',
              },
            ]}>
            <TextInput
              value={streetaddress2}
              placeholderTextColor="grey"
              style={styles.txtinp}
              onChangeText={text => setStreetaddress2(text)}
              placeholder=" Address 2..."
            />
          </View>
          <Text style={styles.inputTitleStyle}>Zip Code *</Text>
          <View
            style={[
              styles.txtinpView,
              {
                borderColor:
                  !zipcode.length > 0 && errorField ? 'red' : '#C0C0C0',
              },
            ]}>
            <TextInput
              value={zipcode}
              placeholderTextColor="grey"
              style={styles.txtinp}
              onChangeText={text => setZipcode(text)}
              placeholder=" e.g. 123456"
              keyboardType="numeric"
              maxLength={6}
            />
          </View>
          {errorField && !zipcode.length > 0 && (
            <Text
              style={{
                color: 'red',
                marginLeft: 20,
              }}>
              {ZIPCODE_REQUIRED}
            </Text>
          )}

          <Text style={styles.inputTitleStyle}>Location *</Text>
          <View
            style={[
              styles.txtinpView,
              {
                borderColor:
                  !location.length > 0 && errorField ? 'red' : '#C0C0C0',
              },
            ]}>
            <TextInput
              value={location}
              placeholderTextColor="grey"
              style={styles.txtinp}
              onChangeText={text => setLocation(text)}
              placeholder=" Location"
            />
          </View>
          {errorField && !location.length > 0 && (
            <Text
              style={{
                color: 'red',
                marginLeft: 20,
              }}>
              {LOCATION_REQUIRED}
            </Text>
          )}
        </View>
      </ScrollView>

      {isLoading ? (
        <View style={styles.signUpBtnStyle}>
          <ActivityIndicator color="white" />
        </View>
      ) : (
        <Button
          label="Submit"
          onPress={() => {
            apicalling();
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#000',
    flex: 1,
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
  simpleTxt: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C2C9D1',
  },
  inputTitleStyle: {
    marginLeft: -2,
    fontSize: 18,
    fontWeight: 'bold',
    padding: 2,
    color: '#fff',
    paddingLeft: 22,
  },
  imgBtn: {
    height: 30,
    width: 30,
  },
  txtinpView: {
    height: 50,
    fontSize: 15,
    marginVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    padding: 12,
    color: '#fff',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  txtinp: {
    height: 50,
    color: '#fff',
  },
});

export default SignUpScreen3;
