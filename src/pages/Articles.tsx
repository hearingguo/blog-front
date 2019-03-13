import React, { Component } from 'react';
import List from '../layouts/List';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import * as actionCreators from '@/actions/articles';
import { withRouter, RouteComponentProps } from 'react-router';

interface StateProps {
  classifies: IListItem<IClassifyItem>;
  articles: IListItem<IArticleItem>;
}

interface DispatchProps {
  fetchArticles: (data: IArticleGetParams) => void;
}

interface State {
  articleClassifyId: string;
}

const getArticleClassifyId = (classifies: IClassifyItem[], name: string) => {
  if (!name) return '';
  const temp = classifies.filter((item: IClassifyItem) => item.name === name);
  return temp.length ? temp[0]._id : '';
};

class Coding extends Component<StateProps & DispatchProps & RouteComponentProps, State> {
  constructor(props: StateProps & DispatchProps & RouteComponentProps) {
    super(props);
    this.state = {
      articleClassifyId: ''
    };
  }

  public componentDidMount = async () => {
    const { match, fetchArticles, classifies } = this.props;
    this.setState(
      {
        articleClassifyId: getArticleClassifyId(classifies.list, match.path.split('/').pop() || '')
      },
      () => {
        fetchArticles({
          classify: this.state.articleClassifyId
        });
      }
    );
  };

  public render() {
    const { articles } = this.props;
    return <List articles={articles} />;
  }
}

export default connect<StateProps, DispatchProps, {}, RootState>(
  (state: RootState) => ({ classifies: state.classifies, articles: state.articles }),
  (dispatch: Dispatch) => bindActionCreators(actionCreators, dispatch)
)(withRouter(Coding));
