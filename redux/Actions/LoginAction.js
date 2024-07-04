import { API } from '../../src/Utils/BaseUrl';
import { Alert, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';

//----- Login Api
export const LoginAction = (params) => {
    console.log('params...',params);

    return async dispatch => {
        if(params){
            console.log('undercondition..', params);
            fetch(`${API.BASE}/api/auth/login`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body:JSON.stringify(params),
              })
              .then((response) => response.json())
              .then((responseJson) => {
                 console.log("resonsejson....",responseJson)
                if (responseJson.status === 1) {
                    AsyncStorage.setItem('token',responseJson?.data?.token)
                    AsyncStorage.setItem('roleType',responseJson?.data?.user_type)
                    //  Alert.alert(responseJson.message) 
                    dispatch({ type: 'Login', payload: responseJson });
                } else if (responseJson.status != 1) {
                     Alert.alert(responseJson.message)
                    console.log(responseJson)
                    dispatch({ type: 'Login', payload: responseJson});
                }
                  console.log('response object:',responseJson)
              })
              .catch((error) => {
                console.log(error);
              });
          }
    };
};