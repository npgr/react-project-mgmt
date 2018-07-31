import { SEND_NOTIFICATION, DELETE_NOTIFICATION } from '../../actions/notifications';

const defaultState = [
  /*{
    type: 'error',
    message: 'mensaje error'
  },
  {
    type: 'warning',
    message: 'mensaje warning'
  },
  {
    type: 'info',
    message: 'mensaje informativo'
  },
  {
    type: 'success',
    message: 'mensaje Exito'
  }*/
];

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SEND_NOTIFICATION:
      return [
        ...state,
        {
          type: payload.type,
          message: payload.message
        }
      ];
    case DELETE_NOTIFICATION:
      return state.filter((message, i) => i !== payload.id);
    default:
      return state;
  }
};
