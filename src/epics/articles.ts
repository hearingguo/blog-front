import { Observable, of } from 'rxjs';
import { ofType, combineEpics } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS } from '../actions/ActionTypes';
import { Action } from 'redux-actions';
import { get } from '../service/axios';

const fetchArticlesEpic = (action$: Observable<Action<IArticleItem[]>>) =>
  action$.pipe(
    ofType(FETCH_ARTICLES)
    // mergeMap((action: any) => {
    //   // getArticles()
    //  })
  );

export default combineEpics(fetchArticlesEpic);
