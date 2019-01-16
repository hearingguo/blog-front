import { combineEpics } from 'redux-observable';
import locale from './locale';
import articles from './articles';

export default combineEpics(locale, articles);
