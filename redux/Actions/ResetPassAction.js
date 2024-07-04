import React from 'react';
import { API } from '../../src/Utils/BaseUrl';
import { Alert } from 'react-native';

//----- Register Api
export const ResetPassAction = (params) => {
    console.log('params...',params);

    return async dispatch => {
        if(params){
            console.log('undercondition..', params);
            fetch(`${API.BASE}/api/auth/reset-password`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body:JSON.stringify(params),
              })
              .then((response) => response.json())
              .then((responseJson) => {
                if (responseJson.status === 1) {
                    Alert.alert(responseJson.message)
                    dispatch({ type: 'resetpassword', payload: responseJson });
                } else if (responseJson.status !== 1) {
                    Alert.alert(responseJson.message)
                    dispatch({ type: 'resetpassword', payload: responseJson });
                }
                
                  console.log('response object:',responseJson)
              })
              .catch((error) => {
                console.error(error);
              });
          }
    };
};