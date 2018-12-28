import { combineReducers } from 'redux';
import locale from './locale';
import articles from './articles';
import { Reducer } from 'redux-actions';

export default combineReducers({
  locale,
  articles
} as any);
