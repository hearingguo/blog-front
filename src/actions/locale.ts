import { createAction } from 'redux-actions';
import { FETCH_LOCALE } from './ActionTypes';

export const fetchLocale = createAction(FETCH_LOCALE);
