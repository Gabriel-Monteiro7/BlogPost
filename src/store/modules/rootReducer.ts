import {combineReducers} from 'redux';
import post from './post/reducer';
const reducers = combineReducers({
  post,
});

export default reducers;
