import { API } from '../../src/Utils/BaseUrl';
import { Alert } from 'react-native';

//----- upload player Api
export const CountryListAction = () => {
    return async dispatch => {
            fetch(`${API.BASE}/api/default/countries`, {
              method: 'GET',
              })
              .then((response) => response.json())
              .then((responseJson) => {
                console.log('responseJson', responseJson)
                if (responseJson.status === 1) {
                    // Alert.alert(responseJson.message)
                    dispatch({ type: 'getcountrylist', payload: responseJson });
                } else if (responseJson.status != 1) {
                    Alert.alert(responseJson.message)
                    dispatch({ type: 'getcountrylist', payload: responseJson });
                }
                  console.log('response object:',responseJson)
              })
              .catch((error) => {
                console.error(error);
              });
          }
    };
