import { combineReducers } from 'redux';
import { Reducer } from 'redux-actions';
import locale from './locale';
import articles from './articles';
import classifies from './classifies';
import links from './links';

type RootStates = LocaleEntity | IListItem<IArticleItem> | IListItem<IClassifyItem> | IListItem<ILinkItem>;

interface Reducers {
  [key: string]: Reducer<RootStates | undefined, RootStates>;
}

const reducerMap = {
  locale,
  articles,
  classifies,
  links
} as Reducers;

export default combineReducers(reducerMap);
