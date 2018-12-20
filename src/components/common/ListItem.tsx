import React, { Component } from 'react';
import styled from 'styled-components';
import styles from '../../config/style';

const StyleListItem = styled.li``;

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
      <ul>
        <StyleListItem>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
          <div className="others">
            <span className="others-time">{time}</span>
            <span className="others-reads">{reads}</span>
            <span className="others-comments">{comments}</span>
            <span className="others-likes">{likes}</span>
          </div>
        </StyleListItem>
      </ul>
    );
  }
}

export default ListItem;
