import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Routes from './routes';
import Header from './layouts/Header';
import styles from './App.module.scss';

class App extends React.Component {
  public render() {
    return (
      <Provider store={configureStore()}>
        <div className={styles.wrap}>
          {/* FAQ 入口 */}
          <Header />
          {/* Member Center */}
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
