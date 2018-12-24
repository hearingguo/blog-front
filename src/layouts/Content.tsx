import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import route from '../routes/config';
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
          {route[0].routes.map((item: INavItem, index: number) => {
            return <Route path={`/blog${item.path}`} component={item.main} exact={true} />;
          })}
        </Switch>
      </StyleMain>
    );
  }
}

export default Content;
