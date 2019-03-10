import { handleActions, Action } from 'redux-actions';
import { FETCH_LINKS_SUCCESS } from '../actions/ActionTypes';
import { LIST_PAGINATION } from '@/contants/index';

const initialState: IListItem<ILinkItem> = {
  pagination: LIST_PAGINATION,
  list: []
};

export default handleActions<IListItem<ILinkItem>>(
  {
    [FETCH_LINKS_SUCCESS]: (state, action) => ({ ...state, ...action.payload })
  },
  initialState
);
