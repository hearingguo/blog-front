import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AllPages from '../pages';

class Content extends Component {
  public render() {
    return (
      <Switch>
        <Route path="/member/learning" component={AllPages.Learning} />
        <Route path="/booking" component={AllPages.Booking} />
        <Route path="/booking/english" component={AllPages.BookingEnglish} />
      </Switch>
    );
  }
}

export default Content;
