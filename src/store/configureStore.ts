import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '../reducers';

export const history = createBrowserHistory();

export default createStore(rootReducer);

// const configureStore = (initialState?: RootState) => {
//   const epicMiddleware = createEpicMiddleware();
//   let middlewares = applyMiddleware(epicMiddleware, routerMiddleware(history));
//   if (process.env.NODE_ENV === 'development') {
//     middlewares = composeWithDevTools(middlewares);
//   }
//   const store = createStore(connectRouter(history)(reducer), initialState, middlewares);
//   return store;
// };

// export default configureStore;
