import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { IntlProvider } from 'react-intl';
import * as actionCreators from '../actions/user';
import { history } from '../store/configureStore';

import WrapLayout from '../layouts/WrapLayout';
import Home from '../pages/Home';
import E404 from '../pages/E404';

export interface StateProps {
  locale: LocaleEntity;
  user: UserEntity;
}
export interface DispatchProps {
  fetchUserInfo: (ticket?: string) => void;
}

class Routes extends React.Component<StateProps, DispatchProps> {
  public componentDidMount() {
    // 获取当前用户信息
  }

  public render() {
    console.log(this.props);
    const { locale, user } = this.props;
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

export default connect<StateProps, DispatchProps, {}, RootState>(
  (state: RootState) => ({ locale: state.locale, user: state.user }),
  (dispatch: Dispatch) => bindActionCreators(actionCreators, dispatch)
)(Routes);
