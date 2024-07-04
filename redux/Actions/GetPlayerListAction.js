import { API } from '../../src/Utils/BaseUrl';
import { Alert } from 'react-native';

//----- upload player Api
export const GetPlayerListAction = (params) => {
    console.log('params...',params.token);

    return async dispatch => {
        // var formData = new FormData();
        // formData.append('token', params.token);
        if(params){

            console.log("URL ",`${API.BASE}/api/video/player_wholelist`);
            console.log("params", params.token);

            fetch(`${API.BASE}/api/video/player_wholelist`, {
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
                    dispatch({ type: 'getallplayer', payload: responseJson });
                } else if (responseJson.status != 1) {
                    Alert.alert(responseJson.message)
                    dispatch({ type: 'getallplayer', payload: responseJson });
                }
                  console.log('response object:',responseJson)
              })
              .catch((error) => {
                console.error(error);
              });
          }
    };
};
