import React, { Component } from 'react';
import List from '../layouts/List';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import * as actionCreators from '@/actions/articles';
import { isEqual } from 'lodash';
import { withRouter, RouteComponentProps } from 'react-router';

interface StateProps {
  classifies: IListItem<IClassifyItem>;
  articles: IListItem<IArticleItem>;
}

interface DispatchProps {
  fetchArticles: (data: IArticleGetParams) => void;
}

class Coding extends Component<StateProps & DispatchProps & RouteComponentProps> {
  public componentDidMount() {
    const { match, fetchArticles } = this.props;
    fetchArticles({
      classify: match.path.split('/').pop() || ''
    });
  }

  public render() {
    const { articles } = this.props;
    return <List articles={articles} />;
  }
}

export default connect<StateProps, DispatchProps, {}, RootState>(
  (state: RootState) => ({ classifies: state.classifies, articles: state.articles }),
  (dispatch: Dispatch) => bindActionCreators(actionCreators, dispatch)
)(withRouter(Coding));
