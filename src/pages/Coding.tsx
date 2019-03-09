import React, { Component } from 'react';
import List from '../layouts/List';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import * as actionCreators from '@/epics/articles';

const lists = [
  {
    title: 123,
    desc: '123',
    time: '2018-12-20 12:00:00',
    reads: 10,
    comments: 20,
    likes: 10
  },
  {
    title: 124,
    desc: '124',
    time: '2018-12-20 12:00:00',
    reads: 10,
    comments: 20,
    likes: 10
  }
];

interface StateProps {}

interface DispatchProps {
  fetchArticles: (data: IArticleGetParams) => void;
}

class Coding extends Component<StateProps & DispatchProps> {
  public componentDidMount = async () => {
    const { fetchArticles } = this.props;
    // await fetchArticles({

    // });
  };

  public render() {
    return <List lists={lists} />;
  }
}

export default connect<StateProps, DispatchProps, {}, RootState>(
  (state: RootState) => ({ articles: state.articles }),
  (dispatch: Dispatch) => bindActionCreators<any, any>(actionCreators, dispatch)
)(Coding);
