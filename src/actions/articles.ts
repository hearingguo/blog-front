import { createAction } from 'redux-actions';
import { FETCH_ARTICLES } from './ActionTypes';

export const fetchArticles = createAction(FETCH_ARTICLES);
