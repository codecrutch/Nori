import SessionReducer from './session_reducer';
import { combineReducers } from 'redux';
import {reducer as notifications} from 'react-notification-system-redux';

export default combineReducers({
  session: SessionReducer,
  notifications
});
