import Api from '../common/api';
const api = new Api();

export const FETCH_CREDENTIALS = 'FETCH_CREDENTIALS';

export const fetchCredentials = () => ({
  type: FETCH_CREDENTIALS,
  payload: api.get('/user/credentials')
});
