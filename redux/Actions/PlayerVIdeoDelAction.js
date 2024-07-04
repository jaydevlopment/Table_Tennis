import { API } from '../../src/Utils/BaseUrl';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//----- delete Api
export const PlayerVIdeoDelAction = (params) => {
    console.log('params...',params);

    return async dispatch => {
        if(params){
            console.log('undercondition..', params);
           await fetch(`${API.BASE}/api/video/playervideo_delete`, {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + params.token,
              },
              body:JSON.stringify(params),
              })
              .then((response) => response.json())
              .then((responseJson) => {
                if (responseJson.status === 1) {
                    // Alert.alert(responseJson.message)
                    dispatch({ type: 'playerdelete', payload: responseJson });
                } else if (responseJson.status != 1) {
                    Alert.alert(responseJson.message)
                    dispatch({ type: 'playerdelete', payload: responseJson });
                }
                AsyncStorage.removeItem('token',responseJson?.data?.token )
                //   console.log('response object:',responseJson?.data?.token)
              })
              .catch((error) => {
                console.error(error);
              });
          }
    };
};