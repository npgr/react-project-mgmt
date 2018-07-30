export const SEND_NOTIFICATION = 'SEND_NOTIFICATION';
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION';

export const sendNotification = (type, message) =>({
  type: SEND_NOTIFICATION,
  payload: { type, message}
});

export const deleteNotification = (id) =>({
  type: DELETE_NOTIFICATION,
  payload: { id }
});
