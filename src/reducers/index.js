import { combineReducers } from 'redux';
import appReducer from './appReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  info:appReducer
});

export default rootReducer;
