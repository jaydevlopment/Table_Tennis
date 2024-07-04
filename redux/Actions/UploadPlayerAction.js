import { API } from '../../src/Utils/BaseUrl';
import { Alert } from 'react-native';

//----- upload player Api
export const UploadPlayerAction = (params) => {
    console.log('params...',params);

    return async dispatch => {
        if(params){
            var formData = new FormData();
            formData.append('title', params.title);
            formData.append('content', params.content);
            formData.append('video', {
                uri: params.video,
                type: params.type,
                name: params.name,
            });
            formData.append('user_type', params.user_type);
            formData.append('user_ttokenype', params.token);
            console.log('undercondition..', params);
            fetch(`${API.BASE}/api/video/player_video`, {
              method: 'POST',
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
                    Alert.alert(responseJson.message)
                    dispatch({ type: 'uploadplayer', payload: responseJson });
                } else if (responseJson.status != 1) {
                    Alert.alert(responseJson.message)
                    dispatch({ type: 'uploadplayer', payload: responseJson });
                }
                  console.log('response object:',responseJson)
              })
              .catch((error) => {
                console.error(error);
              });
          }
    };
};
