import * as types from '../constants/actionTypes';

export function saveUrl(url) {
  console.log('dispatching')
  return  {
      type: types.SAVE_URL,
      url
    } 
   
}

export function saveTime(time) {
    return { 
      type: types.SAVE_TIME,
      time
    }
  
}
