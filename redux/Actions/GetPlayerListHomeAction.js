import { API } from '../../src/Utils/BaseUrl';
import { Alert } from 'react-native';

export const GetPlayerListHomeAction = (params) => {
    // console.log('params...',params.token);

    return async dispatch => {
        if(params){
            fetch(`${API.BASE}/api/video/player_list`, {
              method: 'GET',
              headers: {
                  'Authorization': 'Bearer ' + params.token,
              },
              })
              .then((response) => response.json())
              .then((responseJson) => {
                // console.log('responseJson', responseJson)
                if (responseJson.status === 1) {
                    // Alert.alert(responseJson.message)
                    dispatch({ type: 'gethomeplayer', payload: responseJson });
                } else if (responseJson.status != 1) {
                    Alert.alert(responseJson.message)
                    dispatch({ type: 'gethomeplayer', payload: responseJson });
                }
                //   console.log('response object:',responseJson)
              })
              .catch((error) => {
                console.error(error);
              });
          }
    };
};