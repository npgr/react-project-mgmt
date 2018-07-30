import {
  SET_I18N
} from '../../actions/i18n';

const defaultState = {
  locale: 'en',
  literals: {
    projects: {}
  }
};

export default (state = defaultState, { type, payload, meta }) => {
  switch (type) {
    case SET_I18N: {
      return {
        ...state,
        ...payload
      };
    }
    default:
      return state;
  }
};
