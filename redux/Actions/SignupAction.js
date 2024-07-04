import React from 'react';
import {API} from '../../src/Utils/BaseUrl';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//----- Register Api
export const SignupAction = params => {
  console.log('params...', params);

  return async dispatch => {
    if (params) {
      console.log('undercondition..', params);
      fetch(`${API.BASE}/api/auth/register`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.status === 1) {
            AsyncStorage.setItem('token',responseJson?.data?.token)
            AsyncStorage.removeItem('sinup1')
            AsyncStorage.removeItem('sinup2')
            AsyncStorage.removeItem('sinup3')
            Alert.alert(responseJson.message);
            dispatch({type: 'Register', payload: responseJson});
          } else if (responseJson.status != 1) {
            Alert.alert(responseJson.message);
            dispatch({type: 'Register', payload: responseJson});
          }
          console.log('response object:', responseJson);
        })
        .catch(error => {
          console.error(error);
        });
    }
  };
};

export const StepOneData = (stepFirst) => {
  return async (dispatch) => {
    dispatch({ type: 'StepOne', payload: stepFirst });
  }
};

export const StepTwoData = (stepSecond) => {
  return async (dispatch) => {
    dispatch({ type: 'StepTwo', payload: stepSecond });
  }
};

export const TeamActivity = (stepSecond) => {
  return async (dispatch) => {
    dispatch({ type: 'teamactivity', payload: stepSecond });
  }
};

export const PostActivity = (stepSecond) => {
  console.log("stepSecond",stepSecond)
  return async (dispatch) => {
    dispatch({ type: 'postactivity', payload: stepSecond });
  }
};

export const InviteActivity = (stepSecond) => {
  console.log("stepSecond",stepSecond)
  return async (dispatch) => {
    dispatch({ type: 'inviteactivity', payload: stepSecond });
  }
};
