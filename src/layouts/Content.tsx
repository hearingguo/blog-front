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
      <div className="blog-main">
        <Switch>
          <Route path="/blog" component={AllPages.Home} />
          <Route path="/blog/coding" component={AllPages.Coding} />
          <Route path="/blog/traveling" component={AllPages.Traveling} />
          <Route path="/blog/trying" component={AllPages.Trying} />
        </Switch>
      </div>
    );
  }
}

export default Content;
