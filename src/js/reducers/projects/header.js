import {
  SET_PROJECTS_FILTER,
  TOGGLE_CREATE_PROJECT
} from '../../actions/projects';

const defaultState = {
  showCreateProject: false,
  filters: {
    project: null,
    customer: null,
    status: null
  }
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_PROJECTS_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [payload.field]: payload.value
        }
      };
    case TOGGLE_CREATE_PROJECT:
      return {
        ...state,
        showCreateProject: !state.showCreateProject
      };
    default:
      return state;
  }
};
