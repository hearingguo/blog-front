import React, { Component } from 'react';
import { FormattedDate } from 'react-intl';
import { withRouter, RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import styles from '../config/style';

const StyleListItem = styled.li`
  padding: ${styles.Gap.l} 0;
  margin: ${styles.Gap.xl} 0;
  position: relative;
  article::before,
  article::after {
    content: '';
    position: absolute;
    top: 0;
    display: block;
  }
  article::before {
    left: -25px;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, ${styles.Color.themeGray} 0, rgba(85, 85, 85, 0));
  }
  article::after {
    top: 22px;
    left: -33px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${styles.Color.white};
    border: 1px solid ${styles.Color.themeGray};
  }
  .title {
    font-weight: bold;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .desc {
    margin: ${styles.Gap.xl} 0;
  }
  .others {
    display: flex;
    align-items: center;
    font-size: ${styles.Size.xs};
    color: ${styles.Color.themeGrayDark};
    > span {
      display: flex;
      margin-right: ${styles.Gap.m};
      align-items: center;
      > em {
        margin-right: ${styles.Gap.xs};
      }
    }
  }

  i {
    display: block;
    font-style: normal;
    position: absolute;
    left: -128px;
    top: 22px;
    color: ${styles.Color.themeGray};
  }
`;

interface IProps extends RouteComponentProps {
  article: any;
}

class ListItem extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { title, description, createDate, meta } = this.props.article;
    return (
      <StyleListItem>
        <article>
          <h2 className="title">{title}</h2>
          <div className="desc">{description}</div>
          <div className="others">
            <span className="others-reads">
              <em className="iconfont icon-view" />
              {meta.views}
            </span>
            <span className="others-comments">
              <em className="iconfont icon-comment" />
              {meta.comments}
            </span>
            <span className="others-likes">
              <em className="iconfont icon-heart" />
              {meta.likes}
            </span>
          </div>
        </article>
        <i>
          <FormattedDate value={new Date(createDate)} />
        </i>
      </StyleListItem>
    );
  }
}

export default withRouter(ListItem);
