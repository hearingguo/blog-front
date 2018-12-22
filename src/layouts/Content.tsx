import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AllPages from '../pages';
import styled from 'styled-components';
import styles from '../config/style';

const StyleMain = styled.div`
  position: relative;
  margin: 0 auto;
  padding: ${styles.Gap.l};
  width: 100%;
  min-height: calc(100% - 206px);
  max-width: 1000px;
`;

class Content extends Component {
  public render() {
    return (
      // blog-main
      <StyleMain>
        <Switch>
          <Route path="/blog/coding" component={AllPages.Coding} exact={true} />
          <Route path="/blog/traveling" component={AllPages.Traveling} exact={true} />
          <Route path="/blog/trying" component={AllPages.Trying} exact={true} />
        </Switch>
      </StyleMain>
    );
  }
}

export default Content;
