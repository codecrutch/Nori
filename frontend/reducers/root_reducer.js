import SessionReducer from './session_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  session: SessionReducer,
});
