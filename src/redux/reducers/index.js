import search from './search';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  searching: search,
});
export default allReducers;