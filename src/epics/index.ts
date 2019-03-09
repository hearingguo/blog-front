import { combineEpics } from 'redux-observable';
import locale from './locale';
import articles from './articles';
import classifies from './classifies';

export default combineEpics(locale, articles, classifies);
