import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './BasicLayout.module.less';
import Footer from './Footer';
import SiderNav from './SideMenu';

const BookComponent = React.lazy(() => import('../pages/Book'));
const RewardComponent = React.lazy(() => import('../pages/Reward'));
const ScheduleComponent = React.lazy(() => import('../pages/Reward'));

class Wrap extends Component {
  public render() {
    return (
      <div className={styles.content}>
        <SiderNav />
        <div className="vjr-main">
          {/* main */}
          <Switch>
            <Route path="/member/book" component={BookComponent} />
            <Route path="/member/reward" component={RewardComponent} />
            <Route path="/member/schedule" component={ScheduleComponent} />
          </Switch>
          {/* footer */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Wrap;
