import trackReducer from './trackReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    track: trackReducer
})

export default rootReducer