import { combineReducers } from 'redux';
import configuration from './configuration';
import customer from './customer/customer';
import i18n from './i18n';
import projects from './projects';
import user from './user';

export default combineReducers({
  configuration,
  customer,
  i18n,
  projects,
  user
});
