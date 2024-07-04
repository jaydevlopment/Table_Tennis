import { API } from '../../src/Utils/BaseUrl';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//----- Login Api
export const ChangePassAction = (params) => {
    console.log('params...',params);

    return async dispatch => {
        if(params){
            console.log('undercondition..', params);
            fetch(`${API.BASE}/api/user/change-password`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + params.token,
              },
              body:JSON.stringify(params),
              })
              .then((response) => response.json())
              .then((responseJson) => {
                if (responseJson.status === 1) {
                    AsyncStorage.removeItem('token');
                    Alert.alert(responseJson.message)
                    dispatch({ type: 'changepassword', payload: responseJson });
                } else if (responseJson.status != 1) {
                    Alert.alert(responseJson.message)
                    dispatch({ type: 'changepassword', payload: responseJson });
                }
                
                  console.log('response object:',responseJson)
              })
              .catch((error) => {
                console.error(error);
              });
          }
    };
};