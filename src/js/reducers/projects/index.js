import { combineReducers } from 'redux';
import detail from './detail';
import header from './header';
import list from './list';

export default combineReducers({
  detail,
  header,
  list
});
