import { fulfilledType } from '../../common/utils';
import {
  FETCH_CREDENTIALS
} from '../../actions/user';

const defaultState = {
  userName: '',
  name: '',
  email: '',
  profile: ''
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case fulfilledType(FETCH_CREDENTIALS):
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};
