import { handleActions } from 'redux-actions';
import { FETCH_CLASSIFIES_SUCCESS } from '../actions/ActionTypes';
import { LIST_PAGINATION } from '@/contants/index';

const initialState: IListItem<IClassifyItem> = {
  pagination: LIST_PAGINATION,
  list: []
};

export default handleActions<IListItem<IClassifyItem>>(
  {
    [FETCH_CLASSIFIES_SUCCESS]: (state, action) => ({ ...state, ...action.payload })
  },
  initialState
);
