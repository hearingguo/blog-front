import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import * as actionCreators from '../actions/user';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store/configureStore';

import AllComponents from '../pages';

/** 国际化 */
import { IntlProvider } from 'react-intl';
import enUs from '../locales/en_US';
import jaJP from '../locales/ja_JP';
import zhCN from '../locales/zh_CN';

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
        {/* <ConnectedRouter history={history}> */}
        <Router>
          <Switch>
            <Route exact path="/" component={AllComponents.Home} />
            <Route path="/booking" component={AllComponents.Booking} />
            <Route path="/booking/english" component={AllComponents.BookingEnglish} />
            <Route path="/404" component={AllComponents.E404} />
          </Switch>
        </Router>
        {/* </ConnectedRouter> */}
      </IntlProvider>
    );
  }
}

export default connect(
  (state: RootState) => ({ user: state.user }),
  (dispatch: Dispatch) => bindActionCreators(actionCreators, dispatch)
)(Routes);
