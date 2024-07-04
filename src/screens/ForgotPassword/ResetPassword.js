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
  ActivityIndicator
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ResetPassAction} from '../../../redux/Actions/ResetPassAction';

import backImg from '../../../assets/images/back.png';
import Button from '../../components/CustomButton/Button';
import TextInput from '../../components/CustomTextInput/CustomTextInput';

const RecoveryEmail = ({navigation, ...props}) => {
  const dispatch = useDispatch();

  const [newpass, setNewpass] = useState('');
  const [cnfpass, setCnfpass] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (props.route.params && props.route.params.email) {
      setEmail(props.route.params.email);
    }
  }, [props]);

  const Resetpasssuccessres = useSelector(
    state => state?.ResetPassReducer?.RESETPASSRES,
  );
  console.log('Resetpasssuccessres....', Resetpasssuccessres);

  useEffect(() => {
    if (Resetpasssuccessres) {
      if (Resetpasssuccessres?.status === 1) {
        setIsLoading(false);
        navigation.navigate('Login');
        // dispatch({ type: 'forgotpassword', payload: '' });
      } else if (Resetpasssuccessres?.status !== 1) {
        setIsLoading(false);
      }
    }
  }, [Resetpasssuccessres]);
  const ResetPassApicall = () => {
    if (newpass === '') {
      Alert.alert('Please enter new password');
    } else if (cnfpass === '') {
      Alert.alert('Please enter confirm password ');
    } else if (newpass != cnfpass) {
      Alert.alert('password does not match');
    } else {
      setIsLoading(true);
      const sendData = {
        email: email,
        password: newpass,
        ['confirm-password']: cnfpass,
      };
      console.log('sendData', sendData['confirm-password']);
      dispatch(ResetPassAction(sendData));
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
          <Text style={styles.toolbarTxt}>Reset Password</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.txtPanel}>
            <Text style={styles.simpleTxt}>Create a New Password</Text>
            <Text style={styles.simpleTxt1}>
              Your password must be at least a one Uppercase characters and should include a
              combination of numbers, letters and special characters (!$@%)
            </Text>
            <Text style={styles.inputTitleStyle}>New Password *</Text>
            <TextInput
              onChangeText={text => setNewpass(text)}
              style={{padding: 5}}
              placeholder=" new password..."
            />
            <Text style={styles.inputTitleStyle}>Confirm Password *</Text>
            <TextInput
              onChangeText={text => setCnfpass(text)}
              style={{padding: 5}}
              placeholder=" confirm password..."
            />
          </View>
          {isLoading ? (
            <View style={styles.OTPBtn}>
              <ActivityIndicator color="white" />
            </View>
          ) : (
          <View style={styles.OTPBtn}>
            <Button
              label="Reset Password"
              onPress={() => {
                ResetPassApicall();
                // navigation.navigate('Login');
              }}
            />
          </View>
          )}
        </View>
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
    // paddingTop: 20,
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
  imgBtn: {
    height: 30,
    width: 30,
  },
  headercontent: {
    justifyContent: 'flex-start',
  },
  SignUpsty: {
    marginHorizontal: 70,
  },
  toolbarTxt: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RecoveryEmail;
