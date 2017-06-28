import SessionReducer from './session_reducer';
import { combineReducers } from 'redux';
import { reducer as notifications } from 'react-notification-system-redux';
import businesses from './business_reducer';
import categories from './category_reducer';
import reviews from './review_reducer';

export default combineReducers({
  session: SessionReducer,
  businesses,
  categories,
  reviews,
  notifications
});
