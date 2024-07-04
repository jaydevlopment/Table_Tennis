import {
  View,
  Image,
  Text,
  Linking,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
// import {useNavigation} from '@react-navigation/native';

import BackgroundImage from '../../../assets/images/Main-003.png';
import Button from '../../components/CustomButton/Button';


const WelcomeScreen = ({navigation}) => {
  const {height, width} = useWindowDimensions();

  const onLoginPressed = () => {
    navigation.navigate('Login');
  };
  const onSignupPressed = () => {
    navigation.navigate('Signup1');
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={BackgroundImage}
          style={
            (styles.backgroundImg, {height: height * 0.3, width: width * 1})
          }
        />
      </View>
      <View style={styles.btnContainer}>
        <Button label="Login" onPress={onLoginPressed} />
        <Button label="Sign up" onPress={onSignupPressed} />
      </View>
      <TouchableOpacity
        style={styles.footer}
        onPress={() => Linking.openURL('https://mosestechnologies.org/')}>
        <Text style={styles.textRights}>
          All rights reserved by{' '}
          <Text style={styles.textLink}>@MOSESTECHNOLOGIES</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 200,
  },
  imgContainer: {},
  backgroundImg: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  btnContainer: {
    marginTop: 50,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  textRights: {
    alignItems: 'center',
    color: 'white',
    fontSize: 10,
  },
  textLink: {
    color: '#5C9CC1',
  },
});
export default WelcomeScreen;
