import trackReducer from './trackReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  track: trackReducer,
  firestore: firestoreReducer
});

export default rootReducer