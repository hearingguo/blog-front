import React, { Component } from 'react';
import styles from '../../config/style';
import styled from 'styled-components';
import { connect } from 'react-redux';

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
  }
`;

interface StateProps {
  articles: IListItem<IArticleItem>;
}
class Pagination extends Component<StateProps> {
  public render() {
    const { pagination } = this.props.articles;
    return (
      <StylePagination>
        <span className="page-num">{`${pagination.page} / ${Math.ceil(pagination.total / pagination.limit)}`}</span>
        <span className="page-ctrl">
          <em className="iconfont icon-left" />
          <em className="iconfont icon-right" />
        </span>
      </StylePagination>
    );
  }
}

export default connect<StateProps, null, {}, RootState>((state: RootState) => ({ articles: state.articles }))(
  Pagination
);
