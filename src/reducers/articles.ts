import { handleActions, Action } from 'redux-actions';
import { FETCH_ARTICLES_SUCCESS } from '../actions/ActionTypes';

const initialState: IArticleItem[] = [];

export default handleActions<IArticleItem[]>(
  {
    [FETCH_ARTICLES_SUCCESS]: (state, action) => ({ ...state, ...action.payload })
  },
  initialState
);
