import { combineReducers } from 'redux';
import locale from './locale';
import articles from './articles';
import classifies from './classifies';
import { Reducer } from 'redux-actions';

export default combineReducers({
  locale,
  articles,
  classifies
} as any);
