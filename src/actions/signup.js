import { request } from '../api';

export const SIGNUP_STARTED = 'SIGNUP_STARTED';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

const signupStarted = () => {
  return {
    type: SIGNUP_STARTED,
    isFetching: true,
    error: null,
  };
};

const signupFailed = error => {
  return {
    type: SIGNUP_FAILED,
    isFetching: false,
    error,
  };
};

const signupSuccess = result => {
  return {
    type: SIGNUP_SUCCESS,
    isFetching: false,
    result,
  };
};

export const signup = ({ data } = {}) => {
  return async dispatch => {
    dispatch(signupStarted());

    let result;
    try {
      result = await request({ method: 'POST', endpoint: 'signup', data });
    } catch (e) {
      return dispatch(signupFailed(e));
    }

    dispatch(signupSuccess(result.result));
  };
};
