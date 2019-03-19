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

  private init = () => {
    const { history, fetchArticles, classifies } = this.props;
    const pathName = history.location.pathname.split('/').pop() || '';
    const articleClassifyId = getArticleClassifyId(classifies.list, pathName);
    this.setState(
      {
        articleClassifyId
      },
      () => {
        fetchArticles({
          classify: articleClassifyId
        });
      }
    );
  };

  public componentWillReceiveProps = (nextProps: RouteComponentProps) => {
    console.log(nextProps);
    //  this.init();
  };

  public componentDidMount = async () => {
    this.init();
  };

  public render() {
    const { articles, history } = this.props;
    console.log(history);
    return <List articles={articles} path={history.location.pathname} />;
  }
}

export default connect<StateProps, DispatchProps, {}, RootState>(
  (state: RootState) => ({ classifies: state.classifies, articles: state.articles }),
  (dispatch: Dispatch) => bindActionCreators(actionCreators, dispatch)
)(withRouter(Coding));
