import React, { Component, lazy } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import routeConfig from '../routes/config';
import styled from 'styled-components';
import styles from '../config/style';

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

class Content extends Component<StateProps> {
  public render() {
    const { classifies } = this.props;
    return (
      // blog-main
      <StyleMain>
        <Switch>
          {classifies.list.map((item, index) => {
            const route = routeConfig[0].routes.filter((itemIn, index) => {
              return itemIn.title === item.name;
            });
            return (
              <Route
                key={index}
                exact={true}
                path={`/blog/${item.name}`}
                component={lazy(() =>
                  import(`@/pages/${item.name.toLowerCase().replace(/^[a-z]/g, (L: string) => L.toUpperCase())}`)
                )}
              />
            );
          })}
        </Switch>
      </StyleMain>
    );
  }
}

export default connect<StateProps, null, {}, RootState>((state: RootState) => ({ classifies: state.classifies }))(
  Content
);
