import { INTRO_LOADED } from '../actions/imageLoaded';

const intitialState = {
  done: false,
};

export default (state = intitialState, action) => {
  switch (action.type) {
    case INTRO_LOADED:
      return {
        ...state,
        done: action.done,
      };
    default:
      return state;
  }
};
