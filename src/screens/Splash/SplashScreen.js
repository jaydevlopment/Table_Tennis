import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Images  from "../../../assets/images/splashImage.png";

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

export const SplashScreen = ({ navigation }) => {

    useFocusEffect(
        React.useCallback(() => {
          getToken()
        }, []),
      );
    
      const getToken = async() => {
        const logToken = await AsyncStorage.getItem('token');
        const user_Type = await AsyncStorage.getItem('roleType');
        console.log("logToken..",logToken);
        console.log("user_Type..",user_Type);
        setTimeout(() => {
            if(logToken){
              if (user_Type === 'player') {
                navigation.navigate('PlayerTabs');
              } else if (user_Type === 'coach') {
                navigation.navigate('CoachTabs');
              } else if (user_Type === 'user') {
                navigation.navigate('UserTabs');
              }
            } else {
                navigation.navigate('LanguageScreen')
            }
        }, 2000);
      }

    return (
        <View style={styles.container}>
            <Image
                source={Images}
                style={styles.logo}
            />
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black'
    },
    logo: {
        resizeMode:'contain',
        // height:Height,
        width:Width
      },
})