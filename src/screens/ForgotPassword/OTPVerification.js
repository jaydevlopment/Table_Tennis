import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import backImg from '../../../assets/images/back.png';
import BackgroundImage from '../../../assets/images/OTPcode.png';
import Button from '../../components/CustomButton/Button';
import {VerifyOtpAction} from '../../../redux/Actions/VerifyOtpAction'
import { useDispatch, useSelector} from 'react-redux';
import { ActivityIndicator } from 'react-native-paper';

const RecoveryEmail = ({ navigation, ...props }) => {
  
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (props.route.params && props.route.params.email) {
      setEmail(props.route.params.email);
    }
  }, [props]);

  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);
  const pin5Ref = useRef(null);
  const pin6Ref = useRef(null);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [pin5, setPin5] = useState("");
  const [pin6, setPin6] = useState("");

  const Verifyotpsucccessres = useSelector(state => state?.VerifyOtpReducer?.VERIFYOTPRES);
  console.log('Verifyotpsucccessres....', Verifyotpsucccessres);

  useEffect(() => {
    if (Verifyotpsucccessres) {
      if (Verifyotpsucccessres?.status === 1) {
        setIsLoading(false);
        navigation.navigate('ResetPassword', {email: email});
        // dispatch({ type: 'forgotpassword', payload: '' });
      } else if (Verifyotpsucccessres?.status !== 1) {
        setIsLoading(false);
      }
    }
  }, [Verifyotpsucccessres]);

  const OtpVerifyApicall = () => {
     if (pin1 === '') {
      Alert.alert('Please enter correct otp');
    } else if (pin2 === '') {
      Alert.alert('Please enter correct otp');
    } else if (pin3 === '') {
      Alert.alert('Please enter correct otp');
    } else if (pin4Ref === '') {
      Alert.alert('Please enter correct otp');
    } else if (pin5Ref === '') {
      Alert.alert('Please enter correct otp');
    } else if (pin6 === '') {
      Alert.alert('Please enter correct otp');
    } else {
      setIsLoading(true);
      const sendData = {
        email: email,
        otp: pin1+pin2+pin3+pin4+pin5+pin6
      };
      console.log('sendData', sendData);
      dispatch(VerifyOtpAction(sendData));
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
          <Text style={styles.toolbarTxt}>Otp Verification</Text>
        </View>
      </View>
      <KeyboardAvoidingView>
        <View style={styles.mainContainer}>
          <Image source={BackgroundImage} style={styles.backgroundImg} />
          <Text style={styles.simpleTxt}>Verification</Text>
          <Text style={styles.information}>
            Enter your verification code we just sent you on your Email.
          </Text>
          <View style={styles.blockOTP}>
            <TextInput ref={pin1Ref} value={pin1} style={styles.txtOTP} keyboardType="numeric" maxLength={1} onChangeText={(pin1) => {
              setPin1(pin1);
              if (pin1 !== "") {
                pin2Ref.current.focus()
              }
            }} />
            <TextInput ref={pin2Ref}  value={pin2} style={styles.txtOTP} keyboardType="numeric" maxLength={1} onChangeText={(pin2) => {
              setPin2(pin2);
              if (pin2 !== "") {
                pin3Ref.current.focus()
              }
            }} />
            <TextInput ref={pin3Ref} value={pin3} style={styles.txtOTP} keyboardType="numeric" maxLength={1} onChangeText={(pin3) => {
              setPin3(pin3);
              if (pin3 !== "") {
                pin4Ref.current.focus()
              }
            }} />
            <TextInput ref={pin4Ref} value={pin4} style={styles.txtOTP} keyboardType="numeric" maxLength={1} onChangeText={(pin4) => {
              setPin4(pin4);
              if (pin4 !== "") {
                pin5Ref.current.focus()
              }
            }} />
            <TextInput ref={pin5Ref} value={pin5} style={styles.txtOTP} keyboardType="numeric" maxLength={1} onChangeText={(pin5) => {
              setPin5(pin5);
              if (pin5 !== "") {
                pin6Ref.current.focus()
              }
            }} />
            <TextInput ref={pin6Ref} value={pin6} style={styles.txtOTP} keyboardType="numeric" maxLength={1} onChangeText={(pin6) => {
              setPin6(pin6);
            }} />
          </View>
          {isLoading ? (
            <View style={styles.OTPBtn}>
              <ActivityIndicator color="white" />
            </View>
          ) : (
          <View style={styles.OTPBtn}>
            <Button
              label="Verify"
              onPress={() => {
                OtpVerifyApicall()
                // navigation.navigate('ResetPassword');
              }}
            />
          </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: '100%',
    padding: 16,
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
    marginHorizontal:70,
  },
  toolbarTxt: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainContainer: {
    alignItems: 'center',
    paddingTop: 50,
  },
  simpleTxt: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C2C9D1',
  },
  information: {
    paddingTop: 20,
    paddingBottom: 30,
    fontSize: 15,
    color: '#C2C9D1',
    textAlign: 'center',
  },
  OTPBtn: {
    width: 100,
    marginTop: 20,
  },
  backgroundImg: {
    height: 100,
    width: 100,
    borderRadius: 16,
  },
  txtOTP: {
    height: 40,
    width: 40,
    margin: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    color: 'white',
    marginHorizontal:5
  },
  blockOTP: {
    flexDirection: 'row',
  },
});

export default RecoveryEmail;
