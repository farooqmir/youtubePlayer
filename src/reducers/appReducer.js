import {SAVE_URL, SAVE_TIME} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function appReducer(state = initialState.appReducer, action) {
   
  switch (action.type) {
    case SAVE_URL:
     return objectAssign({}, state, {url: action.url});

    case SAVE_TIME:
      return objectAssign({}, state, {time: action.time});
      
    default:
      return state;
  }
}
