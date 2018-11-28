import { Observable, of } from 'rxjs';
import { ofType, combineEpics } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { FETCH_LOCALE, FETCH_LOCALE_SUCCESS } from '../actions/ActionTypes';
import { Action } from 'redux-actions';
import { addLocaleData } from 'react-intl';

import en_US from '../locales/en_US';
import zh_CN from '../locales/zh_CN';
import ja_JP from '../locales/ja_JP';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';
import ja from 'react-intl/locale-data/ja';

addLocaleData([...zh, ...en, ...ja]);

const locales = {
  'en-US': { app: en_US },
  'zh-CN': { app: zh_CN },
  'ja-JP': { app: ja_JP }
};

// TODO: refactor this part
const fetchLocale = (action$: Observable<Action<string>>) =>
  action$.pipe(
    ofType(FETCH_LOCALE),
    mergeMap((action: Action<string>) => {
      return of({
        type: FETCH_LOCALE_SUCCESS,
        payload: {
          language: action.payload,
          ...locales['zh-CN']
        } as LocaleEntity
      });
    })
  );

export default combineEpics(fetchLocale);
