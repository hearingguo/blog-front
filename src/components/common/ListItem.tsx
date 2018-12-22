import React, { Component } from 'react';
import styled from 'styled-components';
import styles from '../../config/style';

const StyleListItem = styled.li`
  padding: ${styles.Gap.l} 0;
  position: relative;
  article::before, article::after {
    content: '';
    position: absolute;
    top: 0;
    display: block;
    background: ${styles.Color.themeGray};
  }
  article::before {
    left: -25px;
    width: 1px;
    height: 100%;
  }
  article::after {
    top: 25px;
    left: -32px;
    width: ${styles.Gap.m}
    height: ${styles.Gap.m}
    border-radius: 50%;
  }
  .title {
    font-weight: bold;
  }
  .desc {
    margin: ${styles.Gap.xl} 0;
  }
  .others {
    font-size: ${styles.Size.xs};
    color: ${styles.Color.themeGrayDark};
  }

  i {
    display: block;
    font-style: normal;
    position: absolute;
    left: -120px;
    top: 25px;
    color: ${styles.Color.themeGray};
  }
`;

interface IProps {
  article: any;
}

class ListItem extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { title, desc, time, reads, comments, likes } = this.props.article;
    return (
      <StyleListItem>
        <article>
          <h1 className="title">{title}</h1>
          <div className="desc">{desc}</div>
          <div className="others">
            <span className="others-reads">{reads}</span>
            <span className="others-comments">{comments}</span>
            <span className="others-likes">{likes}</span>
          </div>
        </article>
        <i>{time.split(' ')[0].replace(/-/g, '.')}</i>
      </StyleListItem>
    );
  }
}

export default ListItem;
