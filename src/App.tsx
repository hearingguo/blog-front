import * as React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import configureStore from './store/configureStore';
import Routes from './routes';

import './App.less';
import './less/index.less';

const StylePage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

class App extends React.Component {
  public render() {
    return (
      <Provider store={configureStore()}>
        <StylePage className="blog-page">
          {/* Member Center */}
          <Routes />
        </StylePage>
      </Provider>
    );
  }
}

export default App;
