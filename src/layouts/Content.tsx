import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AllPages from '../pages';

class Content extends Component {
  public render() {
    return (
      <Switch>
        <Route path="/blog/home" component={AllPages.Home} />
        <Route path="/blog/list" component={AllPages.List} />
      </Switch>
    );
  }
}

export default Content;
