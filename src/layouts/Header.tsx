import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import * as actionCreators from '@/actions/classifies';
import styles from '../config/style';
import route from '../routes/config';
import Search from '../components/common/Search';
import logo from '../assets/images/logo.png';

const StyleHeader = styled.div`
  overflow: hidden;
  border-bottom: 1px solid ${styles.Color.border};
  padding: ${styles.Gap.l};
  box-shadow: ${styles.Shadow.blackBottom};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyleLogo = styled.a`
  display: inline-block;
  margin-right: 15px;
  width: 120px;
  height: 30px;
  background: url(${logo}) no-repeat;
  background-size: cover;
  vertical-align: middle;
`;

const StyleNavs = styled.div`
  display: inline-block;
`;

const StyleNav = styled.a`
  display: inline-block;
  padding: 0 ${styles.Gap.s};
  cursor: pointer;
  border-left: 1px solid ${styles.Color.border};
  line-height: 1;
  :nth-of-type(1) {
    border-left: 0;
  }
  :hover {
    color: ${styles.Color.themeDark};
  }
`;

interface StateProps {
  classifies: IListItem<IClassifyItem>;
}

interface DispatchProps {
  fetchClassifies: (data?: any) => void;
}

class Header extends Component<StateProps & DispatchProps> {
  constructor(props: StateProps & DispatchProps) {
    super(props);
  }

  public componentDidMount() {
    const { fetchClassifies } = this.props;
    fetchClassifies();
  }

  public render() {
    const { classifies } = this.props;
    return (
      // blog-header
      <StyleHeader>
        {/* blog-header-left */}
        <div>
          {/* blog-header-logo */}
          <StyleLogo />
          <StyleNavs>
            {classifies.list.map((item, index) => {
              return <StyleNav key={index}>{item.title}</StyleNav>;
            })}
          </StyleNavs>
        </div>
        {/* blog-search */}
        <Search />
      </StyleHeader>
    );
  }
}

export default connect<StateProps, DispatchProps, {}, RootState>(
  (state: RootState) => ({ classifies: state.classifies }),
  (dispatch: Dispatch) => bindActionCreators(actionCreators, dispatch)
)(Header);
