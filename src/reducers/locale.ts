import { handleActions } from 'redux-actions';

import appLocale from '../locales/zh_CN';
import { FETCH_LOCALE_SUCCESS } from '../actions/ActionTypes';

const initialState: LocaleEntity = {
  language: 'zh_CN',
  app: appLocale
};

export default handleActions({}, initialState);
