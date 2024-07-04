import { API } from '../../src/Utils/BaseUrl';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//----- updateProfileAction Api
export const updateProfileAction = (params) => {
    console.log('params...',params);

    return async dispatch => {
        if(params){
            console.log('undercondition..', params);
            fetch(`${API.BASE}/api/user/update`, {
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
                    dispatch({ type: 'updateprofile', payload: responseJson });
                } else if (responseJson.status != 1) {
                    Alert.alert(responseJson.message)
                    dispatch({ type: 'updateprofile', payload: responseJson });
                }
                // AsyncStorage.setItem('token',responseJson?.data?.token )
                //   console.log('response object:',responseJson?.data?.token)
              })
              .catch((error) => {
                console.error(error);
              });
          }
    };
};