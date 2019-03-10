import { combineEpics } from 'redux-observable';
import { map } from 'rxjs/operators';
import createEpic from '@/utils/createEpic';
import { FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS } from '@/actions/ActionTypes';
import { getArticles } from '@/service';

const fetchArticlesEpic = createEpic<IArticleGetParams>(FETCH_ARTICLES, action =>
  getArticles(action.payload).pipe(
    map((response: Ajax.Response) => ({
      type: FETCH_ARTICLES_SUCCESS,
      payload: response.result
    }))
  )
);

export default combineEpics(fetchArticlesEpic);
