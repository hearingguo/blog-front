import { combineReducers } from 'redux';
import locale from './locale';
import user from './user';
import { Reducer } from 'redux-actions';

type RootStates = LocaleEntity | UserEntity;

interface Reducers {
  [key: string]: Reducer<RootStates | undefined, RootStates>;
}

const reducerMap = {
  locale,
  user
} as Reducers;

export default combineReducers(reducerMap);
