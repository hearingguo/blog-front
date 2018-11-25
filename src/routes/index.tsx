import * as React from 'react';
// import { Dispatch, bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store/configureStore';

/** 国际化 */
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

class Routes extends React.Component {
  public render() {
    return (
      <IntlProvider locale={navigator.language} messages={locales[navigator.language]}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/404" component={E404} />
          </Switch>
        </ConnectedRouter>
      </IntlProvider>
    );
  }
}

export default Routes;
