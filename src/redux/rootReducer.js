import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';

const rootReducer = combineReducers({
    auth: authReducer, // example of authentication
    // example of basic static value in string or numbers
    // example of objects
    // example of nested objects - deep copy and use immer
    // example of arrays
    // example of nested arrays - deep copy and use immer
    // example of API calls / Async Await
});

export default rootReducer;
