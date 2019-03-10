import { handleActions, Action } from 'redux-actions';
import { FETCH_ARTICLES_SUCCESS } from '../actions/ActionTypes';
import { LIST_PAGINATION } from '@/contants/index';

const initialState: IListItem<IArticleItem> = {
  pagination: LIST_PAGINATION,
  list: []
};

export default handleActions<IListItem<IArticleItem>>(
  {
    [FETCH_ARTICLES_SUCCESS]: (state, action) => ({ ...state, ...action.payload })
  },
  initialState
);
