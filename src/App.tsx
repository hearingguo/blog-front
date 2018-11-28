import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Routes from './routes';

import './App.less';

class App extends React.Component {
  public render() {
    return (
      <Provider store={configureStore()}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
