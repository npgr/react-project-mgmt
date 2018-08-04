import {
  TOGGLE_PROJECT_DETAIL,
  SHOW_PROJECT_DETAIL
} from '../../actions/projects';

const defaultState = {
  showProjectDetail: false,
  id: 0,
  name: '',
  status: '',
  customer: {
    id: 0,
    name: ''
  }
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case TOGGLE_PROJECT_DETAIL:
      return {
        ...state,
        showProjectDetail: !state.showProjectDetail
      };
    case SHOW_PROJECT_DETAIL:
      return {
        ...state,
        ...payload.project,
        showProjectDetail: true
      };
    default:
      return state;
  }
};
