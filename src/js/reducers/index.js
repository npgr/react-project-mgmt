import { combineReducers } from 'redux';
import configuration from './configuration';
import i18n from './i18n';
import customer from './customer/customer';
import projects from './projects';

export default combineReducers({
  configuration,
  i18n,
  customer,
  projects
});
