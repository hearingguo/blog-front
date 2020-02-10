import React, { Component } from 'react';
import List from '../layouts/List';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import * as actionCreators from '@/actions/articles';
import { withRouter, RouteComponentProps } from 'react-router';
import { isEqual } from 'lodash';

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
    const { location, fetchArticles, classifies, match } = this.props;
    const pathName = location.pathname.split('/').pop() || '';
    console.log(classifies);
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

  public componentWillReceiveProps(nexProps: RouteComponentProps & StateProps) {
    console.log(nexProps);
    if (isEqual(nexProps.classifies, this.props.classifies)) {
      this.init();
    }
  }

  public componentDidUpdate(prevProps: RouteComponentProps & StateProps) {
    const locationChanged = this.props.location !== prevProps.location;
    if (isEqual(prevProps.classifies, this.props.classifies)) {
      this.init();
    }
    console.log(locationChanged);
    //  this.init();
  }

  public render() {
    const { articles, location } = this.props;
    return (
      <>
        <List articles={articles} path={location.pathname} />
      </>
    );
  }
}

export default connect<StateProps, DispatchProps, {}, RootState>(
  (state: RootState) => ({ classifies: state.classifies, articles: state.articles }),
  (dispatch: Dispatch) => bindActionCreators(actionCreators, dispatch)
)(withRouter(Coding));
