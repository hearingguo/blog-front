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
          <Route path="/blog/home" component={AllPages.Home} />
          <Route path="/blog/list" component={AllPages.List} />
        </Switch>
      </div>
    );
  }
}

export default Content;
