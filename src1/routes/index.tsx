import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { IntlProvider } from 'react-intl';
import * as actionCreators from '../actions/user';
import { history } from '../store/configureStore';

import BasicLayout from '../layouts/BasicLayout';
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
    const { locale, user } = this.props;
    return (
      <IntlProvider locale={locale.language} messages={locale.app}>
        <ConnectedRouter history={history}>
          <div>
            <Switch>
              <Route path="/member" component={BasicLayout} />
              <Route path="/404" component={E404} />
            </Switch>
          </div>
        </ConnectedRouter>
      </IntlProvider>
    );
  }
}

export default connect<StateProps, DispatchProps, {}, RootState>(
  (state: RootState) => ({ locale: state.locale, user: state.user }),
  (dispatch: Dispatch) => bindActionCreators(actionCreators, dispatch)
)(Routes);
