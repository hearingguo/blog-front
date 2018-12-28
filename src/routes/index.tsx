import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { IntlProvider } from 'react-intl';
import { history } from '../store/configureStore';

import WrapLayout from '../layouts/WrapLayout';
import Home from '../pages/Home';
import E404 from '../pages/E404';

export interface StateProps {
  locale: LocaleEntity;
}
export interface DispatchProps {
  fetchUserInfo: (ticket?: string) => void;
}

class Routes extends React.Component<StateProps, DispatchProps> {
  public render() {
    console.log(this.props);
    const { locale } = this.props;
    return (
      <IntlProvider locale={locale.language} messages={locale.app}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/blog" component={Home} exact={true} />
            <Route path="/blog/:name" component={WrapLayout} exact={true} />
            <Route path="/404" component={E404} exact={true} />
          </Switch>
        </ConnectedRouter>
      </IntlProvider>
    );
  }
}

export default connect<StateProps, undefined, {}, RootState>((state: RootState) => ({ locale: state.locale }))(Routes);
