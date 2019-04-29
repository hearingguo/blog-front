import React, { Component, lazy } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import routeConfig from '../routes/config';
import styled from 'styled-components';
import styles from '@/config/style';
import { withRouter, RouteComponentProps } from 'react-router';
import E404 from '../pages/E404';
import Profile from '../pages/Profile';

const Articles = lazy(() => import('@/pages/Articles'));

const StyleMain = styled.div`
  position: relative;
  margin: 0 auto;
  padding: ${styles.Gap.l};
  width: 100%;
  min-height: calc(100% - 206px);
  max-width: 1100px;
`;

interface StateProps {
  classifies: IListItem<IClassifyItem>;
}

class Content extends Component<StateProps & RouteComponentProps> {
  private getComponent() {
    const { classifies, match } = this.props;
    // @ts-ignore
    const classify = classifies.list.filter(item => item.name === match.params.name);
    // @ts-ignore
    const route = routeConfig[0].routes.filter(item => item.name === match.params.name);

    if (classify.length) {
      return <Articles />;
    } else if (route.length) {
      const Comp = lazy(() => import(`@/pages/${route[0].component}`));
      return <Comp />;
    } else {
      return <E404 />;
    }
  }

  public render() {
    return (
      // blog-main
      <StyleMain>
        <Switch>
          <Route exact={true} path="/blog/:name" component={() => this.getComponent()} />
          <Route exact={true} path="/blog/:name/:id" component={Profile} />
        </Switch>
      </StyleMain>
    );
  }
}

export default withRouter(
  connect<StateProps, null, {}, RootState>((state: RootState) => ({ classifies: state.classifies }))(Content)
);
