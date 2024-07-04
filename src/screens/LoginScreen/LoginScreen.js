import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Dimensions,
  Alert
} from 'react-native';
import BackgroundImage from '../../../assets/images/loginimage.png';
import Button from '../../components/CustomButton/Button';
import visibleImage from '../../../assets/images/shows.png';
import { LoginAction } from '../../../redux/Actions/LoginAction';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import d from '../../../assets/images/hide.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Loginscreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const LoginSuccessRes = useSelector(state => state?.loginReducer?.LOGINRES);
  const type = LoginSuccessRes?.data?.user_type;
  //console.log('LoginSuccessRes', LoginSuccessRes);  

  const [errorField, setErrorField] = useState(false);
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [show, setShow] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { height, width } = useWindowDimensions();

  const EMAIL_REQUIRED = 'Email is required';
  const PASSWORD_REQUIRED = 'Password is required';

  useFocusEffect(
    React.useCallback(() => {
      setEmail("")
      setPassword1("")
      setErrorField(false)
    }, []),

  );

  useEffect(() => {
    if (LoginSuccessRes) {
      getCurrentTime();
      setTimeout(() => {
        if (LoginSuccessRes?.status === 1 && type === 'player') {
          setIsLoading(false);
          navigation.navigate('PlayerTabs', {
            screen: 'HomeForPlayer'
          });
        } else if (LoginSuccessRes?.status === 1 && type === 'coach') {
          setIsLoading(false);
          navigation.navigate('CoachTabs', {
            screen: 'HomeForCoach'
          });
        } else if (LoginSuccessRes?.status === 1 && type === 'user') {
          setIsLoading(false);
          navigation.navigate('UserTabs', {
            screen: 'HomeForUser'
          });
        } else if (LoginSuccessRes?.status !== 1) {
          setIsLoading(false);
        }
      }, 1000);
    }
  }, [LoginSuccessRes]);


  const onForgotPressed = () => {
    navigation.navigate('ForgetPassword');
  };

  const getCurrentTime = () => {
    const time = new Date(new Date().getTime()+ 150000).toLocaleTimeString();
    console.log( 'loginsettime...',time);
    AsyncStorage.setItem('sessionTime', time);
  };

  const LoginApiCall = () => {
    if (!email.length > 0 || !password1.length > 0) {
      setErrorField(true);
    } else {
      setIsLoading(true);
      const sendData = {
        email: email,
        password: password1,
      };
      //console.log('sendData', sendData);
      dispatch(LoginAction(sendData));
    }
  };

  const goToSignUp = () => {
    dispatch({ type: 'Register', payload: '' });
    navigation.push('Signup1')
    dispatch({ type: 'StepOne', payload: '' });
    dispatch({ type: 'StepTwo', payload: '' });
  }

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <View style={styles.imgContainer}>
          <Image
            source={BackgroundImage}
            style={[
              styles.backgroundImg,
              { height: height * 0.5, width: width * 1 },
            ]}
          />
        </View>
        <View style={styles.signupForm}>
          <Text style={styles.inputTitleStyle}>Email *</Text>
          <View style={styles.txtinpview}>
            <TextInput
              placeholderTextColor="grey"
              style={{
                height: 50,
                fontSize: 15,
                marginVertical: 6,
                borderRadius: 6,
                borderWidth: 1,
                justifyContent: 'center',
                borderColor:
                  !email.length > 0 && errorField ? 'red' : '#C0C0C0',
                padding: 12,
                color: '#fff',
              }}
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder=" Enter your email..."
            />
          </View>
          {errorField && !email.length > 0 && (
            <Text style={styles.errorTxt}>{EMAIL_REQUIRED}</Text>
          )}

          <Text style={styles.inputTitleStyle}>Password *</Text>
          <View
            style={{
              height: 50,
              fontSize: 15,
              marginVertical: 6,
              borderRadius: 6,
              borderWidth: 1,
              borderColor:
                !password1.length > 0 && errorField ? 'red' : '#C0C0C0',
              padding: 12,
              color: '#fff',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              placeholderTextColor="grey"
              onChangeText={text => setPassword1(text)}
              style={styles.txtinp}
              value={password1}
              placeholder=" Enter your password"
              secureTextEntry={show}
            />
            {!show ? (
              <TouchableOpacity
                onPress={() => {
                  setShow(true);
                }}
                style={{
                  marginLeft: 12,
                }}>
                <Image
                  source={d}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'contain',
                    tintColor: '#C2C9D1',
                  }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setShow(false);
                }}
                style={{
                  marginLeft: 10,
                }}>
                <Image
                  source={visibleImage}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'contain',
                    tintColor: '#C2C9D1',
                  }}
                />
              </TouchableOpacity>
            )}
          </View>
          {errorField && !password1.length > 0 && (
            <Text style={styles.errorTxt}>{PASSWORD_REQUIRED}</Text>
          )}
        </View>
        <View style={styles.loginButton}>
          <Button
            label="Forgot Password?"
            type="TERTIARY"
            onPress={onForgotPressed}
          />
          {isLoading ? (
            <View style={styles.signUpBtnStyle}>
              <ActivityIndicator color="white" />
            </View>
          ) : (
            <View>
              <Button label="Login" onPress={LoginApiCall} />
            </View>
          )}
          <TouchableOpacity
            style={styles.box}
            onPress={() => goToSignUp()}>
            <Text style={styles.txtSignup}>
              Don't have an account? <Text style={styles.signUp}>Sign up.</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#000',
    padding: 5,
    height: Height,
  },
  backgroundImg: {
    maxWidth: 370,
    maxHeight: 300,
    opacity: 50,
    bottom: 10,
  },
  loginButton: {
    marginVertical: 10,
    bottom: 30,
  },
  txtSignup: {
    color: '#C2C9D1',
    alignItems: 'center',
    fontSize: 12,
  },
  box: {
    alignItems: 'center',
    marginVertical: 20,
  },
  signUp: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputTitleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  txtinp: {
    height: 50,
    color: '#fff',
    width: Width / 1.35,
  },
  signupForm: {
    padding: 10,
    marginTop: -120,
  },
  errorTxt: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Loginscreen;
