import { combineReducers } from 'redux';
import options from './options';
import showcases from './showcases';

const rootReducer = combineReducers({
  options,
  showcases
});

export default rootReducer;
