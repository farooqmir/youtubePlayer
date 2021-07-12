import * as ActionTypes from '../constants/actionTypes';
import reducer from './appReducer';

describe('Reducers::appReducer', () => {
  const getInitialState = () => {
    return {
        time:0,
        url:""
    };
  };

  const url ="XA234743h";
  const time = 30.44;

  const getAppState = () => {
    return {
      time,
      url
    };
  };
 

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();
    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle SAVE_URL', () => {
    const action = { type: ActionTypes.SAVE_URL, url };
    const expected = Object.assign(getAppState(), { url });
    expect(reducer(getAppState(), action)).toEqual(expected);
  });

  it('should handle SAVE_TIME', () => {
    const action = { type: ActionTypes.SAVE_TIME, time };
    const expected = Object.assign(getAppState(), { time });
    expect(reducer(getAppState(), action)).toEqual(expected);
  });
});