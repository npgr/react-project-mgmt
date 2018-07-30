// import { fulfilledType, pendingType, rejectedType } from '../../common/utils';
import {
  SET_PROJECTS_FILTER
} from '../../actions/projects';

const defaultState = {
  filters: {
    project: null,
    customer: null,
    status: null
  }
};

export default (state = defaultState, { type, payload, meta }) => {
  switch (type) {
    case SET_PROJECTS_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [payload.field]: payload.value
        }
      };
    default:
      return state;
  }
};
