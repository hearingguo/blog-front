import { handleActions, Action } from 'redux-actions';
import { FETCH_CLASSIFIES_SUCCESS } from '../actions/ActionTypes';

const initialState: IClassifyItem[] = [];

export default handleActions<IClassifyItem[]>(
  {
    [FETCH_CLASSIFIES_SUCCESS]: (state, action) => ({ ...state, ...action.payload })
  },
  initialState
);
