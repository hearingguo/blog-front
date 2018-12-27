import { combineReducers } from 'redux';
import locale from './locale';
import articles from './articles';
import { Reducer } from 'redux-actions';

type RootStates = LocaleEntity | UserEntity;

interface Reducers {
  [key: string]: Reducer<RootStates | undefined, RootStates>;
}

const reducerMap = {
  locale,
  articles
} as Reducers;

export default combineReducers(reducerMap);
