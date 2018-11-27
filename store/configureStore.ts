import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from '../reducers';
import { RootState } from '../typings/redux';

export const history = createBrowserHistory();

const configureStore = (initialState?: RootState) => {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    initialState,
    compose(applyMiddleware(routerMiddleware(history)))
  );
  return store;
};

export default configureStore;
