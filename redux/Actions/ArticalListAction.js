import { API } from '../../src/Utils/BaseUrl';
import { Alert } from 'react-native';

//----- uploadimage player Api
export const ArticalListAction = (params) => {
    // console.log('params...',params);

    return async dispatch => {
        if(params){          
             console.log('undercondition..', params);
            fetch(`${API.BASE}/api/article/list`, {
              method: 'GET',
              headers: {
                  'Authorization': 'Bearer ' + params.token,
              },
              })
              .then((response) => response.json())
              .then((responseJson) => {
                console.log('responseJson', responseJson)
                if (responseJson.status === 1) {
                     Alert.alert(responseJson.message)
                    dispatch({ type: 'articallist', payload: responseJson });
                } else if (responseJson.status != 1) {
                //    Alert.alert(responseJson.message)
                    dispatch({ type: 'articallist', payload: responseJson });
                }
                   console.log('response object:',responseJson)
              })
              .catch((error) => {
                console.error(error);
              });
          }
    };
};
