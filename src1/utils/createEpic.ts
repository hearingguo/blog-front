import { ofType } from 'redux-observable';
import { Observable, ObservableInput } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Action } from 'redux-actions';

type ActionFunction<T> = (action: Action<T>, index: number) => ObservableInput<any>;

export default function createEpic<T>(type: string, action: ActionFunction<T>) {
  return (action$: Observable<Action<T>>) =>
    action$.pipe(
      ofType(type),
      mergeMap(action)
    );
}
