import { SET_APP_TITLE } from '../../actions/configuration';

const defaultState = {
  title: 'Title'
};

export default (state = defaultState, { type, payload, meta }) => {
  switch (type) {
    case SET_APP_TITLE:
      return {
        ...state,
        title: payload
      };
    default:
      return state;
  }
};
