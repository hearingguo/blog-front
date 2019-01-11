import { combineReducers } from 'redux';
import { Reducer } from 'redux-actions';
import locale from './locale';
import user from './user';

type RootStates = LocaleEntity | UserEntity;

interface Reducers {
  [key: string]: Reducer<RootStates | undefined, RootStates>;
}

const reducerMap = {
  locale,
  user
} as Reducers;

export default combineReducers(reducerMap);
