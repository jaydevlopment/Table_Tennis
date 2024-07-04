import { API } from '../../src/Utils/BaseUrl';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//----- Login Api
export const UpdatePlayerAction = (params) => {
    console.log('params...',params);

    return async dispatch => {
        if(params){
            console.log('undercondition..', params);
            fetch(`${API.BASE}/api/video/update`, {
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
                    Alert.alert(responseJson.message)
                    dispatch({ type: 'updateplayer', payload: responseJson });
                } else if (responseJson.status != 1) {
                    Alert.alert(responseJson.message)
                    dispatch({ type: 'updateplayer', payload: responseJson });
                }
                // AsyncStorage.setItem('token',responseJson?.data?.token )
                  console.log('response object:',responseJson?.data?.token)
              })
              .catch((error) => {
                console.error(error);
              });
          }
    };
};