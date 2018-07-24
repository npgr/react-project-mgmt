import { combineReducers } from 'redux';
import header from './header';
import list from './list';

export default combineReducers({
  header,
  list
});
