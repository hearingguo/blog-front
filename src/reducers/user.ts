import { handleActions } from 'redux-actions';
import { FETCH_USER_INFO_SUCCESS, LOGOUT_SUCCESS } from '../actions/ActionTypes';

const initialState = {
  id: '',
  username: ''
};

export default handleActions<UserEntity>(
  {
    [FETCH_USER_INFO_SUCCESS]: (state, action) => ({ ...state, ...action.payload }),
    [LOGOUT_SUCCESS]: (state, action) => ({ ...state, ...action.payload })
  },
  initialState
);
