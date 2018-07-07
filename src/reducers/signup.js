import {
  SIGNUP_STARTED,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
} from "../actions/signup";

const intitialState = {
  isFetching: false,
  error: null,
  result: null,
};

export default (state = intitialState, action) => {
  switch (action.type) {
    case SIGNUP_STARTED:
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.error,
      };

    case SIGNUP_FAILED:
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.error,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        result: action.result,
      };
    default:
      return state;
  }
};
