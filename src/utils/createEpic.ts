import { ofType } from 'redux-observable';
import { Observable, ObservableInput } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

type ActionFunction<T> = (action: RootAction<T>, index: number) => ObservableInput<any>;

export default function createEpic<T>(type: string, action: ActionFunction<T>) {
  return (action$: Observable<RootAction<T>>) =>
    action$.pipe(
      ofType(type),
      mergeMap(action)
    );
}
