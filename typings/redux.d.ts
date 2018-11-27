import { RouterState } from 'connected-react-router';
import { LocaleEntity } from './modules/locale';

export interface RootAction<T = {}> {
  type: string;
  payload: T;
}

export interface RootState {
  router: RouterState;
  locale: LocaleEntity;
}
