import { API } from '../../src/Utils/BaseUrl';
import { Alert } from 'react-native';

//----- promotionalvideo player Api
export const GetPromotionalVideolListAction = (params) => {
    // console.log('params...',params);

    return async dispatch => {
        if(params){          
            var formData = new FormData();
            formData.append('team_name', params.team_name);
            formData.append('location', params.location);
            formData.append('image', params.image);
             console.log('undercondition..', params);
            fetch(`${API.BASE}/api/promotion/list`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'multipart/form-data',
                  'Authorization': 'Bearer ' + params.token,
              },
              body:formData,
              })
              .then((response) => response.json())
              .then((responseJson) => {
                console.log('responseJson', responseJson)
                if (responseJson.status === 1) {
                    // Alert.alert(responseJson.message)
                    dispatch({ type: 'promotionalvideo', payload: responseJson });
                } else if (responseJson.status != 1) {
                  //  Alert.alert(responseJson.message)
                    dispatch({ type: 'promotionalvideo', payload: responseJson });
                }
                // console.log('response object:',responseJson)
              })
              .catch((error) => {
                console.error(error);
              });
          }
    };
};
