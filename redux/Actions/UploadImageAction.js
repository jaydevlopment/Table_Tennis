import { API } from '../../src/Utils/BaseUrl';
import { Alert } from 'react-native';

//----- uploadimage player Api
export const UploadImageAction = (params, token) => {
    console.log('params...',params);

    return async dispatch => {
        if(params){          
            var formData = new FormData();
            formData.append('image', {
                uri: params.uri,
                type: params.type,
                name: params.name,
              });
            fetch(`${API.BASE}/api/user/update-image`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'multipart/form-data',
                  'Authorization': 'Bearer ' + token,
              },
              body:formData,
              })
              .then((response) => response.json())
              .then((responseJson) => {
                console.log('responseJson', responseJson)
                if (responseJson.status === 1) {
                    Alert.alert(responseJson.message)
                    dispatch({ type: 'uploadimage', payload: responseJson });
                } else if (responseJson.status != 1) {
                    Alert.alert(responseJson.message)
                    dispatch({ type: 'uploadimage', payload: responseJson });
                }
                  console.log('response object:',responseJson)
              })
              .catch((error) => {
                console.error(error);
              });
          }
    };
};
