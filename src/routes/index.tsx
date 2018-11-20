import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store/configureStore';
import * as actionCreators from '../actions/locale';

import { IntlProvider } from 'react-intl';
import enUs from '../locales/en_US';
import jaJP from '../locales/ja_JP';
import zhCN from '../locales/zh_CN';

// 首页
import Home from '../pages/home';

// 个人中心
import User from '../pages/user';

// 404
import E404 from '../pages/E404';

const locales: {
  [key: string]: typeof enUs | typeof jaJP | typeof zhCN;
} = {
  en: enUs,
  ja: jaJP,
  zh: zhCN
};

export interface StateProps {
  locale: LocaleEntity;
}
export interface DispatchProps {
  fetchLocale: (locale: string) => void;
}

class Routes extends React.Component<StateProps, DispatchProps> {
  public render() {
    return (
      <IntlProvider locale={navigator.language} messages={locales[navigator.language]}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/user" component={User} />
            <Route component={E404} />
          </Switch>
        </ConnectedRouter>
      </IntlProvider>
    );
  }
}

export default connect<StateProps, DispatchProps>(
  (state: RootState) => ({ locale: state.locale }),
  (dispatch: Dispatch) => bindActionCreators(actionCreators, dispatch)
)(Routes);
