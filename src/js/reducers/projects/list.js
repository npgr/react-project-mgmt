import { fulfilledType, pendingType, rejectedType } from '../../common/utils';
import {
  FETCH_PROJECTS
  //SET_PROJECTS_FILTER
} from '../../actions/projects';

const defaultState = {
  data: [],
  fetching: false,
  fetched: false
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
	  case pendingType(FETCH_PROJECTS):
      return {
        ...state,
        fetching: true,
		    fetched: false
      };
    case fulfilledType(FETCH_PROJECTS): {
      return {
        ...state,
        data: payload || [],
        fetching: false,
        fetched: true
      };
    }
    case rejectedType(FETCH_PROJECTS):
	    return {
        ...state,
        fetching: false,
        fetched: false,
        error: true
      };
    // case SET_PROJECTS_FILTER:
    //   return {
    //     ...state,
    //     filteredData
    //   };
    default:
      return state;
  }
};
