import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import Footer from './Footer';
import Header from './Header';
import Content from './Content';
import * as actionCreators from '@/actions/classifies';

interface StateProps {
  classifies: IListItem<IClassifyItem>;
}

interface DispatchProps {
  fetchClassifies: (data?: any) => void;
}

class WrapLayout extends Component<StateProps & DispatchProps> {
  public componentDidMount() {
    const { fetchClassifies } = this.props;
    fetchClassifies();
  }

  public render() {
    return (
      <div className="blog-wrap">
        {/* header */}
        <Header />
        {/* main */}
        <Content />
        {/* footer */}
        <Footer />
      </div>
    );
  }
}

export default connect<StateProps, DispatchProps, {}, RootState>(
  (state: RootState) => ({ classifies: state.classifies }),
  (dispatch: Dispatch) => bindActionCreators(actionCreators, dispatch)
)(WrapLayout);
