import { combineEpics } from 'redux-observable';
import { map } from 'rxjs/operators';
import createEpic from '@/utils/createEpic';
import { FETCH_CLASSIFIES, FETCH_CLASSIFIES_SUCCESS } from '@/actions/ActionTypes';
import { getClassifies } from '@/service';

const fetchClassifiesEpic = createEpic<IClassifyGetParams | undefined>(FETCH_CLASSIFIES, action =>
  getClassifies(action.payload).pipe(
    map((response: Ajax.Response) => ({
      type: FETCH_CLASSIFIES_SUCCESS,
      payload: response.result
    }))
  )
);

export default combineEpics(fetchClassifiesEpic);
