import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { IntlProvider } from 'react-intl';
import { history } from '../store/configureStore';

import BasicLayout from '../layouts/BasicLayout';
import Home from '../pages/Home';
import E404 from '../pages/E404';
import Loading from '../components/common/Loading';

export interface StateProps {
  locale: LocaleEntity;
}
export interface DispatchProps {
  fetchUserInfo: (ticket?: string) => void;
}

class Routes extends Component<StateProps, DispatchProps> {
  public render() {
    const { locale } = this.props;
    return (
      <IntlProvider locale={locale.language} messages={locale.app}>
        <ConnectedRouter history={history}>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route key="home" path="/blog" component={Home} exact={true} />
              <Route key="features" path="/blog/:name" component={BasicLayout} exact={true} />
              <Route key="404" component={E404} />
            </Switch>
          </Suspense>
        </ConnectedRouter>
      </IntlProvider>
    );
  }
}

export default connect<StateProps, undefined, {}, RootState>((state: RootState) => ({ locale: state.locale }))(Routes);
