import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import creditReducer from './creditReducer';

export default combineReducers({
    usersReducer,
    creditReducer,
});