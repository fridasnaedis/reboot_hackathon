import { combineReducers } from 'redux';
import localization from './localization';
import signup from './signup';
import imageLoaded from './imageLoaded';

export default combineReducers({ localization, signup, imageLoaded });
