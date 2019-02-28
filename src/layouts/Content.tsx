import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routeConfig from '../routes/config';
import styled from 'styled-components';
import styles from '../config/style';

const StyleMain = styled.div`
  position: relative;
  margin: 0 auto;
  padding: ${styles.Gap.l};
  width: 100%;
  min-height: calc(100% - 206px);
  max-width: 1100px;
`;

class Content extends Component {
  public render() {
    return (
      // blog-main
      <StyleMain>
        <Switch>
          {routeConfig[0].routes.map((item: INavItem, index: number) => (
            <Route path={`/blog${item.path}`} component={item.component} exact={true} />
          ))}
        </Switch>
      </StyleMain>
    );
  }
}

export default Content;
