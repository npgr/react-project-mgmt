export const SET_I18N = 'SET_I18N';

export const setI18n = (locale, literals) =>({
  type: SET_I18N,
  payload: { locale, literals}
});
