import { API } from '../../src/Utils/BaseUrl';
import { Alert } from 'react-native';

//----- AddTeam player Api
export const AddTeamAction = (params) => {
    console.log('params...',params);

    return async dispatch => {
        if(params){          
            var formData = new FormData();
            formData.append('team_name', params.team_name);
            formData.append('location', params.location);
            formData.append('image', params.image);
            formData.append('team_activity', params.team_activity);
            formData.append('who_can_post', params.who_can_post);
            formData.append('invite', params.invite);
            formData.append('team_notification', params.team_notification);
            console.log('undercondition..', params);
            fetch(`${API.BASE}/api/team/add`, {
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
                     //Alert.alert(responseJson.message)
                    dispatch({ type: 'addteam', payload: responseJson });
                } else if (responseJson.status != 1) {
                    // Alert.alert(responseJson.message)
                    dispatch({ type: 'addteam', payload: responseJson });
                }
                  console.log('response object:',responseJson)
              })
              .catch((error) => {
                console.error(error);
              });
          }
    };
};
