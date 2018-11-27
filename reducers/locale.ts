import { handleActions } from 'redux-actions';

import appLocale from '../locales/en_US';
import { FETCH_LOCALE_SUCCESS } from '../actions/ActionTypes';
import { LocaleEntity } from '../typings/modules/locale';
import { RootAction } from '../typings/redux';

const initialState: LocaleEntity = {
  language: 'en-US',
  app: appLocale
};

export default handleActions(
  {
    [FETCH_LOCALE_SUCCESS]: (state: LocaleEntity, action: RootAction<LocaleEntity>) => ({ ...action.payload })
  },
  initialState
);
