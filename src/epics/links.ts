import { combineEpics } from 'redux-observable';
import { map } from 'rxjs/operators';
import createEpic from '@/utils/createEpic';
import { FETCH_LINKS, FETCH_LINKS_SUCCESS } from '@/actions/ActionTypes';
import { getlinks } from '@/service';

const fetchLinksEpic = createEpic(FETCH_LINKS, action =>
  getlinks().pipe(
    map((response: Ajax.Response) => ({
      type: FETCH_LINKS_SUCCESS,
      payload: response.result
    }))
  )
);

export default combineEpics(fetchLinksEpic);
