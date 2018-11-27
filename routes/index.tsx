import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store/configureStore';
import AllComponents from '../pages';

class Routes extends React.Component {
  public componentDidMount() {
    //
  }

  public render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={AllComponents.Home} />
            <Route path="/booking" component={AllComponents.Booking} />
            <Route path="/booking/english" component={AllComponents.BookingEnglish} />
            <Route path="/404" component={AllComponents.E404} />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}

export default Routes;
