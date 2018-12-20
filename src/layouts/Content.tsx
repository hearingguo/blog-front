import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AllPages from '../pages';
import styled from 'styled-components';
import styles from '../config/style';

const StyleMain = styled.div``;

class Content extends Component {
  public render() {
    return (
      // blog-main
      <StyleMain className="blog-main">
        <Switch>
          <Route path="/blog" component={AllPages.Home} exact={true} />
          <Route path="/blog/coding" component={AllPages.Coding} exact={true} />
          <Route path="/blog/traveling" component={AllPages.Traveling} exact={true} />
          <Route path="/blog/trying" component={AllPages.Trying} exact={true} />
        </Switch>
      </StyleMain>
    );
  }
}

export default Content;
