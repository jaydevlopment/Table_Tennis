import { API } from '../../src/Utils/BaseUrl';
import { Alert } from 'react-native';

//----- USERDETAILS player Api
export const userDetailsAction = (params) => {
    console.log('params...',params.token);

    return async dispatch => {
        // var formData = new FormData();
        // formData.append('token', params.token);
        if(params){
            fetch(`${API.BASE}/api/user/detail`, {
              method: 'GET',
              headers: {
                  'Authorization': 'Bearer ' + params.token,
              },
              })
              .then((response) => response.json())
              .then((responseJson) => {
                console.log('responseJson', responseJson)
                if (responseJson.status === 1) {
                    // Alert.alert(responseJson.message)
                    dispatch({ type: 'userdetails', payload: responseJson });
                } else if (responseJson.status != 1) {
                    Alert.alert(responseJson.message)
                    dispatch({ type: 'userdetails', payload: responseJson });
                }
                  console.log('response object:',responseJson)
              })
              .catch((error) => {
                console.error(error);
              });
          }
    };
};

