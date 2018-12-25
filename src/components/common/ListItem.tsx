import React, { Component } from 'react';
import { FormattedDate } from 'react-intl';
import styled from 'styled-components';
import styles from '../../config/style';

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
    background: ${styles.Color.themeGray};
  }
  article::after {
    top: 22px;
    left: -31.5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${styles.Color.white};
    border: 1px solid ${styles.Color.themeGray};
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
    top: 22px;
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
        <i>
          <FormattedDate value={new Date(time)} year="numeric" month="short" day="2-digit" />
        </i>
      </StyleListItem>
    );
  }
}

export default ListItem;
