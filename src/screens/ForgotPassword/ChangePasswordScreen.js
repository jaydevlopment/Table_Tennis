import React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ChangePassAction} from '../../../redux/Actions/ChangePassAction';

import backImg from '../../../assets/images/back.png';
import Button from '../../components/CustomButton/Button';
// import TextInput from '../../components/CustomTextInput/CustomTextInput';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const WIDTH = Dimensions.get('window').width;
const ChangePasswordScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const Changepasssuccessres = useSelector(state => state?.ChangePassReducer?.CHANGEPASSRES);
  console.log('Changepasssuccessres.....', Changepasssuccessres);

  const [oldpass, setOldpass] = useState('');
  const [newpass, setNewpass] = useState('');
  const [cnfpass, setCnfpass] = useState('');
  const [token, setToken] = useState('');
  const [errorField, setErrorField] = useState(false);

  const OLDPASSWORD_REQUIRED = 'Old Password is required';
  const PASSWORD_REQUIRED = 'Password is required';
  const PASSWORD_VALIDATION =
    'Your password must be more than 8 characters long should contain at-least 1 Uppercase, 1 Lowecase, 1 Numeric and 1 Special character';
  const CONFIRMPASSWORD_VALIDATION = 'Confirm password does not match';
  const CONFIRMPASSWORD_REQUIRED = 'Confirm password does not match';

  useFocusEffect(
    React.useCallback(() => {
      getToken();
    }, []),
  );

  const getToken = async () => {
    const logToken = await AsyncStorage.getItem('token');
    setToken(logToken);
    console.log('logToken..', logToken);
  };

  useEffect(() => {
    if (Changepasssuccessres) {
      if (Changepasssuccessres?.status === 1) {
        console.log('enter');
        // setIsLoading(false);
        navigation.navigate('Login');
      } else if (Changepasssuccessres?.status !== 1) {
        // setIsLoading(false);
      }
    }
  }, [Changepasssuccessres]);

  const ChangePasswordApicall = () => {
    // if (oldpass === '') {
    //   Alert.alert('Please enter your old password');
    // } else if (newpass === '') {
    //   Alert.alert('Please enter a new password');
    // } else if (cnfpass === '') {
    //   Alert.alert('Please enter a confirm password ');
    // } else {
    // setIsLoading(true);
    if (
      !oldpass.length > 0 ||
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
        newpass,
      ) ||
      !cnfpass.length > 0 ||
      newpass !== cnfpass
    ) {
      setErrorField(true);
    } else {
      const sendData = {
        old_password: oldpass,
        password: newpass,
        confirmpassword: cnfpass,
        token: token,
      };
      console.log('sendData', sendData);
      dispatch(ChangePassAction(sendData));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.headercontent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backImg} style={styles.imgBtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.SignUpsty}>
          <Text style={styles.toolbarTxt}>Change Password</Text>
        </View>
      </View>
      <ScrollView>
      <KeyboardAvoidingView
        style={{flex: 1}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <View style={styles.mainContainer}>
          <View style={styles.txtPanel}>
            {/* <Text style={styles.simpleTxt}>Change Password</Text> */}
            <Text style={styles.simpleTxt1}>
              Your password must be at least 6 characters and should include a
              combination of numbers, letters and special characters (!$@%)
            </Text>
            <Text style={styles.inputTitleStyle}>Old Password *</Text>
            <View
              style={{
                height: 50,
                fontSize: 15,
                marginVertical: 6,
                borderRadius: 6,
                borderWidth: 1,
                borderColor:
                  !oldpass.length > 0 && errorField ? 'red' : '#C0C0C0',
                padding: 12,
                color: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextInput
                value={oldpass}
                onChangeText={text => setOldpass(text)}
                style={{padding: 5, color:'white',width:WIDTH-100}}
                placeholder=" old password..."
                placeholderTextColor="grey"
              />
            </View>
            {errorField && !oldpass.length > 0 && (
              <Text style={styles.errorTxt}>{OLDPASSWORD_REQUIRED}</Text>
            )}
            <Text style={styles.inputTitleStyle}>New Password *</Text>
            <View
              style={{
                height: 50,
                fontSize: 15,
                marginVertical: 6,
                borderRadius: 6,
                borderWidth: 1,
                borderColor:
                  !newpass.length > 0 && errorField ? 'red' : '#C0C0C0',
                padding: 12,
                color: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextInput
                value={newpass}
                onChangeText={text => setNewpass(text)}
                style={{padding: 5, color:'white',width:WIDTH-100}}
                placeholder=" new password..."
                placeholderTextColor="grey"
              />
            </View>
            {errorField && !newpass.length > 0 ? (
              <Text style={styles.errorTxt}>{PASSWORD_REQUIRED}</Text>
            ) : errorField &&
              !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
                newpass,
              ) ? (
              <Text style={styles.errorTxt}>{PASSWORD_VALIDATION}</Text>
            ) : null}
            <Text style={styles.inputTitleStyle}>Confirm Password *</Text>
            <View
              style={{
                height: 50,
                fontSize: 15,
                marginVertical: 6,
                borderRadius: 6,
                borderWidth: 1,
                borderColor:
                  newpass !== cnfpass && errorField ? 'red' : '#C0C0C0',
                padding: 12,
                color: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextInput
                value={cnfpass}
                onChangeText={text => setCnfpass(text)}
                style={{padding: 5, color:'white',width:WIDTH-100}}
                placeholder=" confirm password..."
                placeholderTextColor="grey"
              />
            </View>
            {errorField &&  newpass !== cnfpass && errorField && (
              <Text style={styles.errorTxt}>{CONFIRMPASSWORD_REQUIRED}</Text>
            )}
          </View>
          <View style={styles.OTPBtn}>
            <TouchableOpacity onPress={() => {
                ChangePasswordApicall();
                // navigation.navigate('Login');
              }}>
              <View style={{backgroundColor:'red', alignSelf:'center',width:WIDTH-60,justifyContent:'center', alignItems:'center', borderRadius:6, height:50}}>
              <Text style={{color:'white', fontWeight:'bold', fontSize:16}}>Change Password</Text>
              </View>
            </TouchableOpacity>
            {/* <Button
              label="Change Password"
              
            /> */}
          </View>
        </View>
      </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: '100%',
    padding: 16,
  },
  mainContainer: {
    alignItems: 'center',
  },
  simpleTxt: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C2C9D1',
    textAlign: 'center',
    // marginBottom: 20,
  },
  txtPanel: {
    padding: 10,
  },
  OTPBtn: {
    marginTop: 10,
  },
  backgroundImg: {
    height: 100,
    width: 100,
    borderRadius: 16,
  },
  txtOTP: {
    height: 50,
    width: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  blockOTP: {
    flexDirection: 'row',
  },
  simpleTxt1: {
    padding: 10,
    fontSize: 15,
    color: '#C2C9D1',
    textAlign: 'center',
  },
  inputTitleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 2,
    color: '#C2C9D1',
    marginLeft: 5,
  },
  container1: {
    height: 40,
    backgroundColor: 'black',
    flexDirection: 'row',
    padding: 5,
  },
  headercontent: {
    justifyContent: 'flex-start',
  },
  SignUpsty: {
    marginLeft: 60,
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
  errorTxt: {
    color: 'red',
  },
});

export default ChangePasswordScreen;

