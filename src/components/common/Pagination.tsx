import React, { Component } from 'react';
import styles from '../../config/style';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';

const StylePagination = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: ${styles.Gap.l} 0 ${styles.Gap.l} 95px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${styles.Color.border};

  &::before {
    position: absolute;
    top: -6px;
    left: 100px;
    transform: rotate(45deg);
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background: ${styles.Color.white};
    border-top: 1px solid ${styles.Color.border};
    border-left: 1px solid ${styles.Color.border};
  }

  .iconfont {
    margin: 0 ${styles.Gap.l};
    cursor: pointer;
    &._disable {
      color: ${styles.Color.themeGray};
    }
  }
`;

interface StateProps {
  articles: IListItem<IArticleItem>;
}

interface State {
  // 1 no left, 2 no right; 0 no left and no right; 3 yes right and yes left
  status: number;
}
class Pagination extends Component<StateProps, State> {
  constructor(props: StateProps) {
    super(props);
    this.state = {
      status: 0
    };
  }

  public componentDidUpdate(prevProps: StateProps) {
    if (!isEqual(prevProps.articles.pagination, this.props.articles.pagination)) {
      const { pagination } = this.props.articles;
      const totalPage = Math.ceil(pagination.total / pagination.limit);
      this.setState({
        status: (() => {
          if (totalPage === 1) {
            return 0;
          } else {
            if (pagination.page === 1) {
              return 1;
            } else if (pagination.page === totalPage) {
              return 2;
            } else {
              return 3;
            }
          }
        })()
      });
    }
  }

  public render() {
    const { pagination } = this.props.articles;
    const { status } = this.state;
    return (
      <StylePagination>
        <span className="page-num">{`${pagination.page} / ${Math.ceil(pagination.total / pagination.limit)}`}</span>
        <span className="page-ctrl">
          <em className={`iconfont icon-left ${status === 1 || status === 0 ? '_disable' : ''}`} />
          <em className={`iconfont icon-right ${status === 2 || status === 0 ? '_disable' : ''}`} />
        </span>
      </StylePagination>
    );
  }
}

export default connect<StateProps, null, {}, RootState>((state: RootState) => ({ articles: state.articles }))(
  Pagination
);
