import { createAction } from 'redux-actions';
import { FETCH_ARTICLES } from './ActionTypes';

export const fetcharticles = createAction(FETCH_ARTICLES);
