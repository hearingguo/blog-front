import { handleActions } from 'redux-actions';

import appLocale from '../locales/zh_CN';
import { FETCH_LOCALE_SUCCESS } from '../actions/ActionTypes';

const initialState: LocaleEntity = {
  language: 'zh-CN',
  app: appLocale
};

export default handleActions<LocaleEntity>(
  {
    [FETCH_LOCALE_SUCCESS]: (state, action) => ({ ...state, ...action.payload })
  },
  initialState
);
