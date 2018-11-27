import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Routes from './routes';
import Header from './layouts/Header';

import './App.less';

class App extends React.Component {
  public render() {
    return (
      <Provider store={configureStore()}>
        <div className="vjr-mc">
          <Header />
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
