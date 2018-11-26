import { createAction } from 'redux-actions';
import { FETCH_USER_INFO } from './ActionTypes';

export const fetchUserInfo = createAction(FETCH_USER_INFO);
