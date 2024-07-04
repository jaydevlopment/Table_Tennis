import React, { useState, useEffect} from 'react';
import { View, Image, Text, StyleSheet, Alert, TouchableOpacity,ActivityIndicator } from 'react-native';
import backImg from '../../../assets/images/back.png';
import BackgroundImage from '../../../assets/images/forgot.png';
import TextInput from '../../components/CustomTextInput/CustomTextInput';
import Button from '../../components/CustomButton/Button';
import { useDispatch, useSelector} from 'react-redux';
import { ForgetPassAction } from '../../../redux/Actions/ForgotPassAction';

const RecoveryEmail = ({ navigation, props }) => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const forgotsucccessres = useSelector(state => state?.ForgotPassReducer?.FORGOTPASS);
  console.log('FORGOTPASS', forgotsucccessres);

  useEffect(() => {
    if (forgotsucccessres) {
      if (forgotsucccessres?.status === 1) {
        setIsLoading(false);
        navigation.navigate('OTPVerification', {email: email});
        // dispatch({ type: 'forgotpassword', payload: '' });
      } else if (forgotsucccessres?.status !== 1) {
        setIsLoading(false);
      }
    }
  }, [forgotsucccessres]);

  const ForgetPasswordApicall = () => {
    if (email === '') {
      Alert.alert('Please enter email');
    } else {
      setIsLoading(true);
      const sendData = {
        email: email,
      };
      console.log('sendData', sendData);
      dispatch(ForgetPassAction(sendData));
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
          <Text style={styles.toolbarTxt}>Forgot Password</Text>
        </View>
      </View>
       {/* <ScrollView>  */}
      <View style={styles.mainContainer}>
        <Image source={BackgroundImage} style={styles.backgroundImg} />
        <Text style={styles.simpleTxt}>Forgot Password?</Text>
        <Text style={styles.information}>
          Enter your Email linked to your account.
        </Text>
        <TextInput style={{ padding: 5 }} placeholder="Email" onChangeText={text => setEmail(text)} />
         {isLoading ? (
            <View style={styles.OTPBtn}>
              <ActivityIndicator color="white" />
            </View>
          ) : (
        <View style={styles.OTPBtn}>
          <Button
            label="Get OTP"
            onPress={() => {
              ForgetPasswordApicall()
              // navigation.navigate('OTPVerification');
            }}
          />
        </View>
          )}
      </View>
      {/* </ScrollView> */}
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
    // paddingTop: 80,
    // paddingBottom: 50,
    paddingTop: 20,
    paddingBottom: 26,
    fontSize: 15,
    color: '#C2C9D1',
    textAlign: 'center',
  },
  OTPBtn: {
    width: 100,
    marginTop: 9,
  },
  backgroundImg: {
    height: 100,
    width: 100,
    borderRadius: 16,
  },
});

export default RecoveryEmail;
